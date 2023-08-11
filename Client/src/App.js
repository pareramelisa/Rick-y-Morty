import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {
   const URL = 'http://localhost:3001/rickandmorty/login/';
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const location = useLocation()
   const navigate = useNavigate()
   const EMAIL = "pareralucenamelisa@gmail.com"
   const PASSWORD = "Vadis1223."
   const onClose = (id) => {
      setCharacters(characters.filter((characters) => characters.id !== id))
   }

   async function onSearch(id) {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

         if (data.name){
            setCharacters((oldChars) => [...oldChars, data]);
         }

      } catch (error) {
         alert('¡No hay personajes con este ID!')

      }
   }

   async function login(userData) {

      try{
         const { email, password } = userData
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;

         setAccess(data);
         access && navigate('/home');

      } catch(error){
         console.log(error.message)
      }
   }
   
   // function login(userData){ //esta funcion sirve para confirmar q la data q llega de los inputs sea igual que las variables que declaramos aca a modo de "base de datos"
   //    if(userData.password === PASSWORD && userData.email === EMAIL){
   //       setAccess(true) //si las dos condiciones se cumplen se setea el estado de acceso como verdadero, q habilita la pagina de home con el hook navigate 
   //       navigate("/home")
   //    }
   // }

   useEffect(() => {
      !access && navigate('/')
   }, [access])
   
   return (
      <div className='App'>
         {location.pathname !=='/' && <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path='/' element={<Form login={login} /> } />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path='/about' element={<About />}/>
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/favorites' element={<Favorites />}/>
         </Routes>
      </div>
   );
}

export default App;

//LOGOUT Y QUE SE RENDERICEN EL DETALLE DE LA CARD FILTRADO X ID EN EL DETAIL Y ESTILOS 
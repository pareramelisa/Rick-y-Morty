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

   const onClose = (id) => {
      setCharacters(characters.filter((characters) => characters.id !== Number(id)))
   }

   async function onSearch(id) {
      const characterAlreadySearched = characters.filter((character) => character.id === Number(id))
      console.log(characterAlreadySearched)
      if (characterAlreadySearched.length === 0) {
         try {
            const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            }

         } catch (error) {
            alert('¡No hay personajes con este ID!')

         }
      } else {
         alert("Ya se busco ese personaje")
      }
   }

   async function login(userData) {
      try {
         const { email, password } = userData
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;

         setAccess(access);
         access && navigate('/home');

      } catch (error) {
         console.log(error.message)
      }
   }


   useEffect(() => {

      !access && navigate('/')

   }, [access, navigate])

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
         </Routes>
      </div>
   );
}

export default App;

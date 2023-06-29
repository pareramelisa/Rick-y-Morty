import style from "./searchBar.module.css"
export default function SearchBar(props) {
   return (
      <div className={style.container}>
         <input type='search' />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}

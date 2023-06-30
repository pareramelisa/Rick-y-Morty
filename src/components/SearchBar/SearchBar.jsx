import style from "./searchBar.module.css"
export default function SearchBar(props) {
   return (
      <div className={style.containerSearchBar}>
         <input className={style.input} type='search' />
         <button className={style.button} onClick={props.onSearch}>Search</button>
      </div>
   );
}

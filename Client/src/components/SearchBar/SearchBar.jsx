import { useState } from "react";
import style from "./searchBar.module.css"
export default function SearchBar({onSearch}) {

   const [id, setId] = useState("")
   
   const handleChange = (event) => {
      let { value } = event.target
      setId(value)

   }

   return (
      <div className={style.containerSearchBar}>
         <input className={style.input} type='search' onChange={handleChange} value={id}/>
         <button className={style.button} onClick={() => onSearch(id)}>Search</button>
      </div>
   );
}

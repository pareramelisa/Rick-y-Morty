import SearchBar from "../SearchBar/SearchBar"
import style from "./Nav.module.css"
import { Link } from "react-router-dom"
export default function Nav(props){
    return (
        <div className={style.nav}> 
          <Link to="/about" className="style.about">
            <button className={style.button}>About</button>
          </Link>

          <Link to="/home">
            <button className={style.button}>Home</button>
          </Link>
          
          <Link to="/favorites">
            <button className={style.button}>Favorites</button>
          </Link>

          <div>
            <SearchBar onSearch={props.onSearch} />
          </div>
        </div> 
    ) 
        
}
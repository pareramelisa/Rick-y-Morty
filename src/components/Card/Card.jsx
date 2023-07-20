import style from "./card.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import {useEffect, useState } from "react";
import { connect } from "react-redux";



export function Card(props) {

   
   const [isFav, setIsFav] = useState(false)

   function handleFavorite(){
      if(!isFav){ 
         props.addFav(props) 
      } else {
         props.removeFav(props.id)
      }
      setIsFav(!isFav)
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         console.log(fav)
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (
      
      <div className={style.cardContainer}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
                ) : (
                <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={style.btn} onClick={props.onClose}></button>
         <img className={style.image} src={props.image} alt='not found' />

         <Link to={`/detail/${props.id}`}>
            <h2 className={style.name}>{props.name}</h2>
         </Link>
         <h2 className={style.item}>{props.status}</h2>
         <h2 className={style.item}>{props.species}</h2>
         <h2 className={style.item}>{props.gender}</h2>
         <h2 className={style.item}>{props.origin}</h2>
      </div>
   );
}

function mapDispatchToProps(dispatch){
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);
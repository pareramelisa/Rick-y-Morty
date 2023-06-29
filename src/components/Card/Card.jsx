import style from "./card.module.css"
export default function Card(props) {
   return (
      <div className={style.cardContainer}>
         <button className={style.boton} onClick={props.onClose}>X</button>
         <img className={style.image} src={props.image} alt='not found' />
         <h2 className={style.name}>{props.name}</h2>
         <h2 className={style.item}>{props.status}</h2>
         <h2 className={style.item}>{props.species}</h2>
         <h2 className={style.item}>{props.gender}</h2>
         <h2 className={style.item}>{props.origin}</h2>
      </div>
   );
}

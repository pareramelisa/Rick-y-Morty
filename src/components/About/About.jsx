import style from "./about.module.css"

export default function About(){
    return(
        <div>
           <div className={style.contain}>
              <h1 className={style.title}>Sobre nosotros...</h1>
              <p className={style.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni odit quibusdam ipsa ad dolorem quo ullam eligendi nostrum perferendis odio, consectetur nemo! Sunt perspiciatis cupiditate vel eligendi quidem quos fugit!</p>        
           </div>
        </div>
        
        
    )
}
import style from "./Favorites.module.css"
import { connect } from "react-redux"
import Card from "../Card/Card"
import { useDispatch } from "react-redux"
import { filterCards, orderCards } from "../../redux/actions"

export function Favorites({ myFavorites }) {
    const dispatch = useDispatch()


    function handleOrder(evento) {
        dispatch(orderCards(evento.target.value))
    }

    function handleFilter(evento) {
        dispatch(filterCards(evento.target.value))
    }

    return (
        <div className={style.contain}>

            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters">allCharacters</option>
            </select>
            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                        />
                    )
                })
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)
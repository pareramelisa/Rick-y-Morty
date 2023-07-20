import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions"


const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return {...state, myFavorites: [...state.allCharacters, action.payload],
            allCharacters: [...state.allCharacters, action.payload]}

        case REMOVE_FAV:
            const newFavorites = state.myFavorites.filter((character) => character.id !== action.payload)
            return {...state, myFavorites: newFavorites}

        case FILTER:
            const charactersFilter = state.allCharacters.filter((characters) => characters.gender === action.payload)
            return {
                ...state, 
                myFavorites: 
                    action.payload === "allCharacters"
                    ? [...state.allCharacters]
                    : charactersFilter
            }

        case ORDER:
            const charactersOrder = [...state.allCharacters]
            return {
                ...state,
                myFavorites:
                    action.payload === "A"
                    ? charactersOrder.sort((a, b) => a.id - b.id)
                    : charactersOrder.sort((a, b) => b.id - a.id)
            }   
        default:
            return {...state} //FALTA ARREGLAR LOS ACTION CREADOS 
    }
}

export default rootReducer
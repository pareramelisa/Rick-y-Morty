import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions"


const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case ADD_FAV:
         return { ...state, myFavorites: action.payload, allCharacters: action.payload };

        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload };

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
            return {...state} 
    }
}

export default rootReducer
import initialState from "./store";

const SET_MOVIES = 'SET_MOVIES';
const ADD_MOVIE = 'ADD_MOVIE';
const REMOVE_MOVIE = 'REMOVE_MOVIE'



const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_MOVIE:
            return {...state,movies:[...state.movies,action.payload]}
        case REMOVE_MOVIE:
            return {...state,movies: state.movies.filter(element => element.id !== action.payload.id)}
        default:
            return state;
    }
}

export default reducer;
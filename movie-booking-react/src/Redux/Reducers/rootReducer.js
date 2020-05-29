import {combineReducers} from 'redux';
import movieReducer from './movieReducer'
import cinemaReducer from './cinemaReducer';
const rootReducer=combineReducers({
    movie: movieReducer ,
    cinema:cinemaReducer
})

export default rootReducer;
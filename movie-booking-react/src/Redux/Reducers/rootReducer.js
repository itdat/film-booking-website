import {combineReducers} from 'redux';
import movieReducer from './movieReducer'
import cinemaReducer from './cinemaReducer';
import movieScheduleReducer from './movieScheduleReducer';
const rootReducer=combineReducers({
    movie: movieReducer ,
    cinema:cinemaReducer,
    movieSchedule:movieScheduleReducer,
})

export default rootReducer;
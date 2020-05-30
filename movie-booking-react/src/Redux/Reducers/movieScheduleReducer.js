import { FETCH_MOVIE_SCHEDULES, FETCH_CINEMA_ID } from "../Action/type";
const initialState = {
  movieSchedules: [],
  movieListByCinema: [],
  cinemaID: "",
};

const movieScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_SCHEDULES:
      state.movieSchedules = action.payload;
      return { ...state };
    case FETCH_CINEMA_ID:
      state.cinemaID = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default movieScheduleReducer;

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
      let movieList = state.movieSchedules[0].lstCumRap;
      let movieListByCinemaUpdated = [];
      let index = movieList.findIndex(
        (item) => item.maCumRap === action.payload
      );
      movieListByCinemaUpdated = movieList[index].danhSachPhim;
      state.cinemaID = action.payload;
      state.movieListByCinema = movieListByCinemaUpdated;
      return { ...state };
    default:
      return state;
  }
};

export default movieScheduleReducer;

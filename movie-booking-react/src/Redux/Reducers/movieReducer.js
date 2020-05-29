import { FETCH_MOVIES, FETCH_MOVIE_DETAIL } from "../Action/type";

let initialState = {
  movieList: [],
  movieDetail: {},
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      state.movieList = action.payload;
      return { ...state };
    case FETCH_MOVIE_DETAIL:
      state.movieDetail=action.payload;
      return {...state};
    default:
      return state;
  }
};

export default movieReducer;

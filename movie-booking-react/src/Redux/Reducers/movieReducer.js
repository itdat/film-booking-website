import { FETCH_MOVIES } from "../Action/type";

let initialState = {
  movieList: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      state.movieList = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default movieReducer;

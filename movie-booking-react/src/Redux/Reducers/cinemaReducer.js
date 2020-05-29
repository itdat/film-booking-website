import {
  FETCH_CINEMA_CLUSTERS,
  CINEMA_CHOOSEN,
  FETCH_CINEMAS,
} from "../Action/type";

let initialState = {
  cinemaClusters: [],
  cinemaChoosen: "BHDStar",
  cinemas: [],
};

const cinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CINEMA_CLUSTERS:
      state.cinemaClusters = action.payload;
      return { ...state };
    case CINEMA_CHOOSEN:
      state.cinemaChoosen = action.payload;
      return { ...state };
    case FETCH_CINEMAS:
      state.cinemas = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default cinemaReducer;

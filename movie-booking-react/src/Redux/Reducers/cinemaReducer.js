import { FETCH_CINEMA_CLUSTERS, CINEMA_CHOOSEN } from "../Action/type";

let initialState = {
  cinemaClusters: [],
  cinemaChoosen: "CGV",
};

const cinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CINEMA_CLUSTERS:
      state.cinemaClusters = action.payload;
      return { ...state };
    case CINEMA_CHOOSEN:
      state.cinemaChoosen = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default cinemaReducer;

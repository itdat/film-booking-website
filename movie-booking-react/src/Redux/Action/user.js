import {
  FETCH_MOVIES,
  FETCH_CINEMA_CLUSTERS,
  FETCH_MOVIE_DETAIL,
  FETCH_CINEMAS,
} from "./type";
import { createAction } from ".";
import { movieServices, cinemaServices } from "../../Services";

//async action
export const fetchMovies = () => {
  return (dispatch) => {
    movieServices
      .getMovies()
      .then((response) => {
        dispatch(createAction(FETCH_MOVIES, response.data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

export const fetchCinemaClusters = () => {
  return (dispatch) => {
    cinemaServices
      .getCinemaClusters()
      .then((response) => {
        dispatch(createAction(FETCH_CINEMA_CLUSTERS, response.data));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};

export const fetchDetailMovie = (id) => {
  return (dispatch) => {
    movieServices
      .getMovieDetail(id)
      .then((response) => {
        dispatch(createAction(FETCH_MOVIE_DETAIL, response.data));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const fetchCinemas = (cinemaType) => {
  return (dispatch) => {
    cinemaServices
      .getCinemas(cinemaType)
      .then((response) => {
        dispatch(createAction(FETCH_CINEMAS, response.data));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};

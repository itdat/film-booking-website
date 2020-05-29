import { FETCH_MOVIES, FETCH_CINEMA_CLUSTERS } from "./type";
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

export const fetchCinemaClusters=()=>{
    return (dispatch)=>{
        cinemaServices
        .getCinemaClusters()
        .then((response) => {
          dispatch(createAction(FETCH_CINEMA_CLUSTERS,response.data));
        })
        .catch((error) => {
          alert(error.message);
        });
    }
}

import React, { Component, Fragment } from "react";
import MyCarousel from "../../Layout/MyCarousel";
import MovieList from "./MovieList";
import News from "../../Components/News";
import Showtime from "../../Components/Showtime";
import { fetchCinemaClusters, fetchMovies, fetchCinemas,fetchMovieSchedule } from "../../Redux/Action/user";
import { connect } from "react-redux";

class Homepage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCinemaClusters());
    this.props.dispatch(fetchMovies());
    this.props.dispatch(fetchCinemas(this.props.cinemaType));
    this.props.dispatch(fetchMovieSchedule(this.props.cinemaType));
  }
  

  render() {
    return (
      <Fragment>
        <MyCarousel />
        <MovieList />
        <Showtime />
        <News />
      </Fragment>
    );
  }
}
const mapStateToProps = state=>{
    return{
        cinemaType: state.cinema.cinemaChoosen
    }
}
export default connect(mapStateToProps)(Homepage);

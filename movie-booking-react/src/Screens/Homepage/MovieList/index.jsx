import React, { Component } from "react";
import { connect } from "react-redux";
import AvailableMovie from "../../../Components/MovieType/AvailableMovie";
import ComingMovie from "../../../Components/MovieType/ComingMovie";
import {fetchMovies} from '../../../Redux/Action/user';
class MovieList extends Component {
  state = {
    type: "available",
  };

  handleType = (newType) => {
    this.setState({
      type: newType,
    });
  };

  render() {
    let movieList = null;

    this.state.type === "available"
      ? (movieList = <AvailableMovie />)
      : (movieList = <ComingMovie />);

    return (
      <section className="type-movie container">
        <div className="home-title">
          <a className="active" onClick={() => this.handleType("available")}>
            PHIM ĐANG CHIẾU
          </a>
          <a onClick={() => this.handleType("comming")}>PHIM SẮP CHIẾU</a>
        </div>

        {/* Danh sách phim theo loại */}
        <div className="row">{movieList}</div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
  };
};
export default connect(mapStateToProps)(MovieList);

import React, { Component } from "react";
import { connect } from "react-redux";
import "./showtime.css";
import CinemaCluster from "./CinemaCluster";
import Cinema from "./Cinema";
import { fetchCinemas, fetchMovieSchedule } from "../../Redux/Action/user";
import MovieSchedule from "./MovieSchedule";
class Showtime extends Component {
  // Cập nhật: danh sách các rạp trong cụm rạp dựa vào props: cinemaType
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.cinemaType !== this.props.cinemaType) {
      this.props.dispatch(fetchCinemas(nextProps.cinemaType));
      this.props.dispatch(fetchMovieSchedule(nextProps.cinemaType));
    }
    return true;
  }

  render() {
    //Danh sách các hệ thống rạp
    let cinemaLogos = this.props.cinemaClusters.map((item, index) => {
      return <CinemaCluster cinemaCluster={item} key={index} />;
    });

    //Danh sách các rạp của hệ thống rạp được chọn
    let cinemaList = this.props.cinemas.map((item, index) => {
      return (
        <Cinema cinema={item} key={index} cinemaName={this.props.cinemaType} />
      );
    });

    //Danh sách phim theo rạp
    let movieShowtime=this.props.movieShowtime.map((item,index)=>{
      return (
        <MovieSchedule movieSchedule={item} key={index}/>
      )
    })

    return (
      <section className="showtime container">
        {/* Showtime title */}
        <div className="home-title">
          <a className="active">LỊCH CHIẾU</a>
        </div>
        {/* End showtime title */}

        {/* Showtime: List cinema logo */}
        <div className="cinema-controller">{cinemaLogos}</div>
        {/* End showtime:List theater logo */}

        {/* Showtime detail */}
        <div className="showtime-detail d-flex">
          <div className="showtime__movie-theater">{cinemaList}</div>
          <div className="showtime__movie-date">
            <div className="movie-date__item">
              <p>Thứ 2</p>
              <p>12-11</p>
            </div>
            <div className="movie-date__item">
              <p>Thứ 3</p>
              <p>13-11</p>
            </div>
            <div className="movie-date__item">
              <p>Thứ 4</p>
              <p>14-11</p>
            </div>
          </div>
          <div className="showtime__movie-time">
            {movieShowtime}
          </div>
        </div>
        {/* End shwotime detail */}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cinemaClusters: state.cinema.cinemaClusters,
    cinemaType: state.cinema.cinemaChoosen,
    cinemas: state.cinema.cinemas || [
      {
        maCumRap: "",
        tenCumRap: "",
        diaChi: "",
        danhSachRap: [],
      },
    ],
    movieShowtime: state.movieSchedule.movieListByCinema,
  };
};

export default connect(mapStateToProps)(Showtime);

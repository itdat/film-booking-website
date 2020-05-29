import React, { Component } from "react";
import { connect } from "react-redux";
import "./showtime.css";
import CinemaCluster from "./CinemaCluster";
import Cinema from './Cinema'
import { fetchCinemaClusters, fetchCinemas } from "../../Redux/Action/user";
class Showtime extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCinemas(this.props.cinemaType));
    this.props.dispatch(fetchCinemaClusters());
  }

  render() {
    //Danh sách các hệ thống rạp
    let cinemaLogos = this.props.cinemaClusters.map((item, index) => {
      return <CinemaCluster cinemaCluster={item} key={index} />;
    });

    //Danh sách các rạp của hệ thống rạp được chọn
    let cinemaList = this.props.cinemas.map((item, index) => {
      return <Cinema cinema={item} key={index} cinemaName={this.props.cinemaType}/>;
    });

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
          <div className="showtime__movie-theater">
            {cinemaList}
          </div>
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
            <div className="movie-time__item">
              <img
                src="./images/hiem-hoa-rung-chet-jungle-15095199102590.jpg"
                alt
              />
              <div className="movie-time__item-detail">
                <p className="movie-time-title">
                  Thảm họa rừng chết
                  <span>C13</span>
                </p>
                <p className="mb-4 mt-2">
                  <span className="mr-3">2D</span>Phụ đề
                </p>
                <p>
                  <span>12:30</span>
                  <span>12:30</span>
                  <span>12:30</span>
                </p>
              </div>
            </div>
            <div className="movie-time__item">
              <img src="./images/ke-san-lung-so-hai.jpg" alt />
              <div className="movie-time__item-detail">
                <p className="movie-time-title">
                  Kẻ săn lùng sợ hãi
                  <span>C18</span>
                </p>
                <p className="mb-4 mt-2">
                  <span className="mr-3">2D</span>Phụ đề
                </p>
                <p>
                  <span>12:30</span>
                  <span>12:30</span>
                  <span>12:30</span>
                  <span>12:30</span>
                  <span>12:30</span>
                </p>
              </div>
            </div>
            <div className="movie-time__item">
              <img src="./images/ke-san-lung-so-hai.jpg" alt />
              <div className="movie-time__item-detail">
                <p className="movie-time-title">
                  Kẻ săn lùng sợ hãi
                  <span>C18</span>
                </p>
                <p className="mb-4 mt-2">
                  <span className="mr-3">2D</span>Phụ đề
                </p>
                <p>
                  <span>12:30</span>
                  <span>12:30</span>
                  <span>12:30</span>
                  <span>12:30</span>
                  <span>12:30</span>
                </p>
              </div>
            </div>
            <div className="movie-time__item">
              <img src="./images/ke-san-lung-so-hai.jpg" alt />
              <div className="movie-time__item-detail">
                <p className="movie-time-title">
                  Kẻ săn lùng sợ hãi
                  <span>C18</span>
                </p>
                <p className="mb-4 mt-2">
                  <span className="mr-3">2D</span>Phụ đề
                </p>
                <p>
                  <span>12:30</span>
                  <span>12:30</span>
                  <span>12:30</span>
                  <span>12:30</span>
                  <span>12:30</span>
                </p>
              </div>
            </div>
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
    cinemas: state.cinema.cinemas || [{
      maCumRap:"",
      tenCumRap:"",
      diaChi:"",
      danhSachRap:[]
    }]
  };
};

export default connect(mapStateToProps)(Showtime);

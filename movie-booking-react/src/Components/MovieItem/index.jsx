import React, { Component } from "react";
import "./movieItem.css";
import { Link } from "react-router-dom";
export default class MovieItem extends Component {
  render() {
    let movie = this.props.movie;

    let rating = [];
    if (movie.danhGia > 5) movie.danhGia = 5;
    for (let i = 0; i < movie.danhGia; i++) {
      rating.push(<i className="fa fa-star" />);
    }

    return (
      <div className="col-6 col-sm-4 col-md-4 col-lg-3 myCol">
        <div className="type-movie__item">
          <div className="filmThumbnail">
            <img src={movie.hinhAnh} alt={movie.biDanh} />
            <div className="movieItemOverlay" />
            <div className="movie__detail">
              <i className="fa fa-play d-block faPlay" />
            </div>
            <div className="movie__item-type">
              <p>C13</p>
            </div>
            <div className="booking-button">
              <Link
                to={`/movieDetail/${movie.maPhim}`}
                className="myButton movieItem__button"
              >
                XEM CHI TIẾT
              </Link>
              <button className="myButton movieItem__button">
                MUA VÉ
                <i className="fa fa-film" />
              </button>
            </div>
          </div>
          <div className="type-movie__item-info mt-2">
            <div className="movie__item-infoTitle">
              <p>{movie.tenPhim} (C18)</p>
            </div>
            <div className="movie__item-infoTime">
              <p className="mr-3">110 phút</p>
              <p className="movie__item-rating">{rating}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

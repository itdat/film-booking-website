import React, { Component } from "react";

export default class Cinema extends Component {
  render() {
    let { cinema, cinemaName } = this.props;
    return (
      <div className="movie-theater__item">
        <div className="movie-theater__item-logo">
          <img src="./images/cgv-1.jpg" alt="cgv1" />
        </div>
        <div className="movie-theater__detail">
          <p className="movie-theater__name">
            {cinemaName}
            <span className="ml-2">- Sense City</span>
          </p>
          <p className="movie-theater__address">
            {cinema.diaChi.slice(0, 20)}...
          </p>
          <a href="#">[chi tiết]</a>
        </div>
      </div>
    );
  }
}

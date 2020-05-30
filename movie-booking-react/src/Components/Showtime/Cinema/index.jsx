import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../../../Redux/Action";
import { FETCH_CINEMA_ID } from "../../../Redux/Action/type";

class Cinema extends Component {
  CINEMA_IMAGE = [
    { name: "CGV", value: "./images/cgv-1.jpg" },
    { name: "BHDStar", value: "./images/bhd3.jpg" },
    { name: "CineStar", value: "./images/cns2.jpg" },
    { name: "Galaxy", value: "./images/bhd4.jpg" },
    { name: "LotteCinima", value: "./images/cns1.jpg" },
    { name: "MegaGS", value: "./images/bhd1.jpg" },
  ];

  handleShowMovie = (maCumRap) => {
    this.props.dispatch(createAction(FETCH_CINEMA_ID,maCumRap))
  };
  render() {
    let { cinema, cinemaType } = this.props;
    let cinemaImage;
    for (let i = 0; i < this.CINEMA_IMAGE.length; i++) {
      if (this.CINEMA_IMAGE[i].name === cinemaType) {
        cinemaImage = this.CINEMA_IMAGE[i].value;
        break;
      }
    }
    return (
      <div
        className="movie-theater__item"
        onClick={() => this.handleShowMovie(cinema.maCumRap)}
      >
        <div className="movie-theater__item-logo">
          <img src={cinemaImage} alt="cgv1" />
        </div>
        <div className="movie-theater__detail">
          <p className="movie-theater__name">
            {cinema.tenCumRap}
            {/* <span className="ml-2">- Sense City</span> */}
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
const mapStateToProps = (state) => {
  return {
    cinemaType: state.cinema.cinemaChoosen,
  };
};
export default connect(mapStateToProps)(Cinema);

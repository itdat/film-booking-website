import React, { Component } from "react";
import { connect } from "react-redux";
import "./cinemaCluster.css";
import axios from "axios";
import { CINEMA_CHOOSEN } from "../../../Redux/Action/type";
import { createAction } from "../../../Redux/Action";

class CinemaCluster extends Component {
  // componentDidMount() {
  //     axios({
  //         method:'GET',
  //         url:''
  //     })
  // }

  handleCinemaChoosen = (maHeThongRap) => {
      this.props.dispatch(createAction(CINEMA_CHOOSEN,maHeThongRap))
  };
  
  render() {
    let cinemaCluster = this.props.cinemaCluster;
    return (
      <div className="cinema-controller__item">
        <img
          src={cinemaCluster.logo}
          alt={cinemaCluster.tenHeThongRap}
          onClick={() => this.handleCinemaChoosen(cinemaCluster.maHeThongRap)}
        />
      </div>
    );
  }
}

export default connect()(CinemaCluster);

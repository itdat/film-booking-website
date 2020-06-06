import React, { Component } from "react";
import { connect } from "react-redux";
import "./cinemaCluster.css";
import axios from "axios";
import { CINEMA_CHOOSEN } from "../../../Redux/Action/type";
import { createAction } from "../../../Redux/Action";

class CinemaCluster extends Component {
  state = {
    isActive: false
  }
  handleCinemaChoosen = (maHeThongRap) => {
      this.props.dispatch(createAction(CINEMA_CHOOSEN,maHeThongRap))
  };

  handleActive = () => {
    this.setState(
      { isActive: true }
    )
  }
  
  render() {
    let cinemaCluster = this.props.cinemaCluster;
    let classes = "cinema-controller__item";
    if (this.state.isActive) classes = this.props.active+" "+classes;
    return (
      <div className={classes} onClick={this.handleActive}>
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

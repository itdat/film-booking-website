import React, { Component } from "react";
import './movieSchedule.css'
export default class MovieSchedule extends Component {

    render() {
        let movieSchedule=this.props.movieSchedule;
        
        return(
            <div className="movie-time__item">
              <img
                src={movieSchedule.hinhAnh}
                alt="ha"
              />
              <div className="movie-time__item-detail">
                <p className="movie-time-title">
                  {movieSchedule.tenPhim}
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
        )
    }
}

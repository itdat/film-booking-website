import React, { Component } from "react";
import './header.css'
import {Link} from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <header className="container-fuild" id="header">
        <nav className="navbar navbar-expand-md">
          {/* Header logo */}
          <Link to="/" className="navbar-brand">
            <img src="/images/logo-dark-mode.png" alt="logo-web" />
          </Link>
          {/* End Header logo */}
          {/* Header button toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="toggle-icon" />
          </button>
          {/* End header button toggler */}
          {/* Navigation bar */}
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Lịch chiếu
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Cụm rạp
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Tin tức
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Sự kiện nổi bật
                  </a>
                  <a className="dropdown-item" href="#">
                    Review
                  </a>
                  <a className="dropdown-item" href="#">
                    Khuyến mãi
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Tuyển dụng
                </a>
              </li>
            </ul>
            {/* Sign in */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="signin nav-link">
                  <i className="fa fa-user mr-2" />
                  {/* <p data-toggle="modal" data-target="#login">Đăng nhập</p> */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#login"
                  >
                    Đăng nhập
                  </button>
                </a>
              </li>
            </ul>
            {/* End Sign in */}
          </div>
        </nav>
      </header>
    );
  }
}

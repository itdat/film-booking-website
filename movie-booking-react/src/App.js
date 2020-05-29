import React, { Component, Fragment } from "react";
import Homepage from "./Screens/Homepage/Homepage";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieDetail from "./Screens/MovieDetail";
import SignUp from "./Screens/Signup";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/movieDetail/:movieID"  component={MovieDetail} />
          <Route path="/signup"  component={SignUp} />
          <Route path="/" component={Homepage} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    );
  }
}

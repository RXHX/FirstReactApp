import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from './Component/NavBar/NavBar';
import Container from "./Component/Container/Container";
import Registration from './Form/Registration/Registration';
import Login from "./Form/Login/Login";
class App extends Component {
  render() {
    return (
    <div>
          <p className = "App-header">
            File Management System
          </p>
        <p className = "App-Intro"></p>
        <BrowserRouter>
        <Registration/>
        <Login/>
        <NavBar/>
        <Container/>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;

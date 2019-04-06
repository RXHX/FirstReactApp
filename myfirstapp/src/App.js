import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from './Component/NavBar/NavBar';
import Container from "./Component/Container/Container";

class App extends Component {
  render() {
    return (
    <div>
          <p className = "App-header">
            File Management System
          </p>
        <p className = "App-Intro"></p>
        <BrowserRouter>
        <NavBar/>
        <Container/>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;

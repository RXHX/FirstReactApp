import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from './Component/NavBar/NavBar';
import Container from "./Component/Container/Container";
import Registration from './Form/Registration/Registration';
import Login from "./Form/Login/Login";
import Head from "../src/Head/Start";
import Third from "../src/Head/Third";

class App extends Component {
  render() {
    return (
    <div>
      <Head/>
      <Third/>
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

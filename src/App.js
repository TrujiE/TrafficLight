import React, {useState} from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import Contenido from './Contenido';


class App extends React.Component{
  constructor(){
    super();
  };

    render(){
      return(
          <div className="container">
          <h1> Traffic Light </h1>
          <Contenido />
          </div>
        );
    }
}
export default App;



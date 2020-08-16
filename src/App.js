import React, { Component } from 'react'
import Routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
require('dotenv').config()

class App extends Component {
  constructor (props) {
    super(props)

  }


  render () {
    return (
    
       <Routes/>
      );
      
  }
}

export default App

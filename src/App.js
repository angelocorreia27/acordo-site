import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import Routes from "./routes";



class App extends Component {
  constructor (props) {
    super(props)
    this.state = { file: null, exampleSelected: 0 }
    this.handleFile = this.handleFile.bind(this)
    this.selectExample = this.selectExample.bind(this)
    this.handleContent = this.handleContent.bind(this)
    this.handleFile = this.handleFile.bind(this)

  }


  handleFile (file) {
    this.setState({
      file: file
    })
  }

  handleContent (content) {
    this.setState({
      content: content
    })
  }

  selectExample (number) {
    this.setState({
      exampleSelected: number
    })
  }

  render () {
    return (
       
      <Routes/>);

  }
}

export default App

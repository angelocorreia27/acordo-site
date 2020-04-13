import React, { Component } from 'react'
import Routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';



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
    
      <Routes/>

      );
      
  }
}

export default App

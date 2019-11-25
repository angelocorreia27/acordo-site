import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom"
import {createStore} from "redux";
import combineReducers from "./store/reducers";
import {Provider} from "react-redux";
import FileMenu from "./components/FileMenu"
import FileDrop from "./components/FileDrop"
import Editor from "./components/Editor"


class Routes extends Component {
        constructor (props) {
          super(props)
          this.state = { file: null, exampleSelected: 0 }
          this.handleFile = this.handleFile.bind(this)
          this.selectExample = this.selectExample.bind(this)
          this.handleContent = this.handleContent.bind(this)
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
  const store = createStore(combineReducers);

return (
    <BrowserRouter>
    <Provider store={store}>
   <Switch>
     
     <Route exact path="/" component= {FileMenu} />
     <Route path="/FileDrop" component={()=>(<div><FileDrop onFile={this.handleFile} handleContent={this.handleContent} selectExample={this.selectExample}/><Editor file={this.state.file} content={this.state.content} exampleNumber={this.state.exampleSelected}/></div>)} /> 
      </Switch>
     </Provider>
     </BrowserRouter>
     
 );

    }

}

export default Routes;

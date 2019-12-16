import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom"
import {createStore} from "redux";
import combineReducers from "./store/reducers";
import {Provider} from "react-redux";
import Inicio from "./components/inicio";
import Rever from "./components/Rever";
import Auth from "./components/autentika"
import MenuDropzone from "./components/MenuDropzone";
import Modelo from "./components/gerir/Modelo";

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

     <Route exact path="/" component={Inicio}/>
     <Route exact path="/" component={MenuDropzone}/>
     <Route exact path="/Modelo" component={Modelo}/>
     <Route exact path="/auth/login" component={Auth}/>
    
    </Switch>
     </Provider>
     </BrowserRouter>
     
 );

    }

}

export default Routes;

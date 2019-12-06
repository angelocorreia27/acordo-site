import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom"
import {createStore} from "redux";
import combineReducers from "./store/reducers";
import {Provider} from "react-redux";
import Inicio from "./components/inicio";
<<<<<<< HEAD
import Rever from "./components/Rever";
import Review from "./components/Review";
import Auth from "./components/autentika"
=======
import Rever from "./components/Rever"
import Review from "./components/gerir/Review";
import login from "./components/DocSign/login"

>>>>>>> d928456ea7bc287809f191e9752fe9f040ca4c94


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
     <Route exact path="/Review" component={Review}/>
<<<<<<< HEAD
     <Route exact path="/auth/login" component={Auth}/>
=======
     <Route exact path="/login" component={login}/>


>>>>>>> d928456ea7bc287809f191e9752fe9f040ca4c94
    </Switch>
     </Provider>
     </BrowserRouter>
     
 );

    }

}

export default Routes;

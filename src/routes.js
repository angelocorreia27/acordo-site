import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom"
import {createStore} from "redux";
import combineReducers from "./store/reducers";
import {Provider} from "react-redux";
import Inicio from "./components/inicio";
import AddDestinatar from "./components/AddDestinatar";
import MenuDropzone from "./components/MenuDropzone";
import Editor from "./components/FileEditor/Editor";
import SideMenu from "./components/FileEditor/SideMenu";
import addDoc from "./components/DocSign/addDoc";
import Rever from "./components/Rever";
import Review from "./components/gerir/Review";
import auth from "./components/auth/auth"
import Welcome from "./pages/pages/Welcome";


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
     <Route exact path="/Editor" component={Editor}/>
     
     <Route exact path="/addDoc" component={addDoc}/>
     <Route exact path="/Rever" component={Rever}/>
     <Route exact path="/Review" component={Review}/>
     <Route exact path="/AddDestinatar" component={AddDestinatar}/>


     
     <Route exact path="/Welcome" component={Welcome}/>
     
     <Route exact path="/auth" component={auth}/>

     
    
    </Switch>
     </Provider>
     </BrowserRouter>
     
 );

    }

}

export default Routes;
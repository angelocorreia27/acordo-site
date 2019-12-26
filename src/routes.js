import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom"
import {createStore} from "redux";
import combineReducers from "./store/reducers";
import {Provider} from "react-redux";
import Inicio from "./components/inicio";
//import Rever from "./components/Rever";
import Auth from "./components/autentika";
import handleLogin from './components/autentika/handleLogin';
import MenuDropzone from "./components/MenuDropzone";
import Editor from "./components/FileEditor/Editor";
import SideMenu from "./components/FileEditor/SideMenu";
import addDoc from "./components/DocSign/addDoc";
import Rever from "./components/Rever";
import Login from "./layout/Login/index"
import GlobalStyles from "./pages/pages/Welcome";
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
      

     <Route exact path="/auth" component={Auth}/>
     
     <Route exact path="/Welcome" component={Welcome}/>
     
     <Route exact path="/auth/login" component={handleLogin}/>
     <Route exact path="/index" component={Login}/>

     
    
    </Switch>
     </Provider>
     </BrowserRouter>
     
 );

    }

}

export default Routes;
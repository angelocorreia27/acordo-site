import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Editor from "./components/FileEditor";

import addDoc from "./components/DocSign/addDoc";
import auth from "./components/auth/auth"
import index from "./pages";
import Inicio from './components/inicio';
import Gerir from './components/gerir';
import Modelo from './components/modelo';

import Contract from "./components/modelo/Contract";
import Destinatar from "./components/gerir/destinatar";


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

return (
    <BrowserRouter>
      
   <Switch>

     <Route exact path="/" component={index}/> 
     <Route exact path="/inicio" component={Inicio}/> 
     <Route exact path="/gerir" component={Gerir}/> 
     <Route exact path="/modelo" component={Modelo}/> 
    {// <Route exact path="/destinatar" component={Destinatar}/> 
    //
    }
     <Route exact path="/rever" component={Destinatar}/>

     <Route exact path="/editor" component={Editor}/>
     <Route exact path="/addDoc" component={addDoc}/>     
     <Route exact path="/auth" component={auth}/>
     <Route exact path="/contract" component={Contract}/> 
     
     
    
    {// <Route exact path="/contract" component={Contract}/> 
    }
   
    </Switch>
     </BrowserRouter>
     
 );

    }

}

export default Routes;
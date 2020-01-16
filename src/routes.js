import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom"
import {Provider} from "react-redux";

//import AddDestinatar from "./components/AddDestinatar";
import Editor from "./components/FileEditor";
//import SideMenu from "./components/FileEditor/SideMenu";
import addDoc from "./components/DocSign/addDoc";
//import Rever from "./components/Rever";
//import Review from "./components/gerir/Review";
import auth from "./components/auth/auth"
import index from "./pages";
import Inicio from './components/inicio';
import Modelo from './components/modelo';
import Gerir from './components/gerir';


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

     
     {//<Route exact path="/" component={Inicio}/>
     }
     {//<Route exact path="/" component={MenuDropzone}/>
     }
     <Route exact path="/editor" component={Editor}/>
     <Route exact path="/addDoc" component={addDoc}/>     
     <Route exact path="/auth" component={auth}/>

     
    
    </Switch>
     </BrowserRouter>
     
 );

    }

}

export default Routes;
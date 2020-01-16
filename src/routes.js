import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom"
import {Provider} from "react-redux";
import Editor from "./components/FileEditor";
//import SideMenu from "./components/FileEditor/SideMenu";
import addDoc from "./components/DocSign/addDoc";
//import Rever from "./components/Rever";
import auth from "./components/auth/auth"
import index from "./pages";
import Inicio from './components/inicio';
import Contract from "./components/modelo/Contract";
import Review from "./components/gerir/Review";

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
     <Route exact path="/gerir" component={Review}/> 
     <Route exact path="/modelo" component={index}/> 

     
     {//<Route exact path="/" component={Inicio}/>
     }
     {//<Route exact path="/" component={MenuDropzone}/>
     }
     <Route exact path="/editor" component={Editor}/>
     <Route exact path="/addDoc" component={addDoc}/>     
     <Route exact path="/auth" component={auth}/>
     <Route exact path="/contract" component={Contract}/> 
     
    
    </Switch>
     </BrowserRouter>
     
 );

    }

}

export default Routes;
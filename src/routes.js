import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom"


import Editor from "./components/FileEditor/index";

import SeloTemporal from './components/selo-temporal';
import SeloEletronico from './components/selo-eletronico';
import AssinaturaDigital from './components/assinatura-digital';
import CertificadoSSL from './components/certificado-ssl';

import Auth from './components/auth/auth'	
import index from "./pages";
import Propor from './components/assinatura-digital/propor';
import Gerir from './components/assinatura-digital/gerir';
import Modelo from './components/assinatura-digital/modelo';

import Viewer from "./components/viewer/";
import Footer from './pages/Footer';
import MenuHeader from './pages/MenuHeader';

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
      <MenuHeader></MenuHeader>
      <Switch>
        <Route exact path="/" component={index}/> 
        <Route exact path="/auth" component={Auth}/>
        <Route exact path="/viewer" component={Viewer}/> 

        {/** routes selo temporal**/}
        <Route exact path="/selo-temporal" component={SeloTemporal}/> 

        {/** routes selo eletronico**/}
        <Route exact path="/selo-eletronico" component={SeloEletronico}/> 

        {/** routes assiatura digital**/}
        <Route exact path="/assinatura-digital/" component={AssinaturaDigital}/> 
        <Route exact path="/assinatura-digital/propor" component={Propor}/> 
        <Route exact path="/assinatura-digital/gerir" component={Gerir}/> 
        <Route exact path="/assinatura-digital/recebidos" component={Gerir}/> 
        <Route exact path="/assinatura-digital/enviados" component={Gerir}/> 
        <Route exact path="/assinatura-digital/arquivados" component={Gerir}/> 
        <Route exact path="/assinatura-digital/modelo" component={Modelo}/> 
        <Route exact path="/assinatura-digital/editor" component={Editor}/>

        {/** routes certificado ssl**/}
        <Route exact path="/certificado-ssl" component={CertificadoSSL}/> 

        </Switch>
        <Footer></Footer>
     </BrowserRouter>
     
 );

    }

}

export default Routes;
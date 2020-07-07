import React, { Component } from "react";
import { BrowserRouter, Route,Router} from "react-router-dom"



import SeloTemporal from './components/selo-temporal';

import SeloDigital from './components/selo-digital';
import CreateBusinessFlow from './components/selo-digital/forms/CreateBusinessFlow';
import FlexComponent from './components/selo-digital/forms/FlexComponent';
import FlexForm from './components/selo-digital/forms/FlexForm';
import MyFlexForm from './components/selo-digital/forms/MyFlexForm';
import RenderPage from './components/renderPage/RenderPage';
import RenderComponent from './components/renderPage/RenderComponent';


import CertificadoSSL from './components/certificado-ssl';


import AssinaturaDigital from './components/assinatura-digital';
import Propor from './components/assinatura-digital/propor';
import Gerir from './components/assinatura-digital/gerir';
import Modelo from './components/assinatura-digital/modelo';
import Rever from './components/assinatura-digital/gerir/Rever';

import Editor from "./components/FileEditor/index";
import index from "./pages";

import Viewer from "./components/viewer/";
import Footer from './pages/Footer';
import MenuHeader from './pages/MenuHeader';
import history from './pages/history';

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
      <Router history={history}>
        <MenuHeader></MenuHeader>
        {/* <RenderComponent commoditieId="5" name="teste fff"/> */}


          <Route exact path="/" component={index}/> 
          <Route exact path="/viewer" component={Viewer}/> 

          {/** routes selo temporal**/}
          <Route exact path="/selo-temporal" component={SeloTemporal}/> 

          {/** routes Selo Digital**/}
          <Route exact path="/selo-digital" component={SeloDigital}/> 
          <Route exact path="/selo-digital/create-business-flow" component={CreateBusinessFlow}/> 
          <Route exact path="/selo-digital/flexcomponent" component={FlexComponent}/> 
          <Route exact path="/selo-digital/flexform" component={FlexForm}/> 
          <Route exact path="/selo-digital/myflexform" component={MyFlexForm}/> 

          {/** routes assiatura digital**/}
          <Route exact path="/assinatura-digital/" component={AssinaturaDigital}/> 
          <Route exact path="/assinatura-digital/propor" component={Propor}/> 
          <Route exact path="/assinatura-digital/gerir" component={Gerir}/> 
          <Route exact path="/assinatura-digital/recebidos" component={Gerir}/> 
          <Route exact path="/assinatura-digital/enviados" component={Gerir}/> 
          <Route exact path="/assinatura-digital/arquivados" component={Gerir}/> 
          <Route exact path="/assinatura-digital/modelo" component={Modelo}/> 
          <Route exact path="/assinatura-digital/editor" component={Editor}/>
          <Route exact path="/assinatura-digital/rever" component={Rever}/>

          {/** routes certificado ssl**/}
          <Route exact path="/certificado-ssl" component={CertificadoSSL}/> 

          <Footer></Footer>
      </Router>
     </BrowserRouter>
     
 );

    }

}

export default Routes;
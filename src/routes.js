import React, { Component } from "react";
import { BrowserRouter, Route,Router} from "react-router-dom"


import {CONSTANT, ASSINATURA_DIGITAL, SELO_DIGITAL, 
        CERTIFICADO_SSL, SELO_TEMPORAL, SMS_WEB_PACK} from './store/constant';

// Selo temporal
import SeloTemporal from './components/selo-temporal';

// Selo digital
import SeloDigital from './components/selo-digital';
import CreateAPIFlow from './components/selo-digital/api/CreateAPIFlow';
import FlexComponent from './components/selo-digital/api/FlexComponent';
import FlexForm from './components/selo-digital/api/FlexForm';
import MyFlexForm from './components/selo-digital/api/MyFlexForm';
import CreateBusinessFlow from './components/selo-digital/marketplace/CreateBusinessFlow';
import ListMyBusiness from './components/selo-digital/marketplace/ListMyBusiness';
import ExecuteBusinessFlow from './components/selo-digital/marketplace/ExecuteBusinessFlow';
import ListOrganization from './components/selo-digital/organization/ListOrganization';

// Certificado SSl
import CertificadoSSL from './components/certificado-ssl';

// Assinatura Digital
import AssinaturaDigital from './components/assinatura-digital';
import Propor from './components/assinatura-digital/propor';
import Gerir from './components/assinatura-digital/gerir';
import Modelo from './components/assinatura-digital/modelo';
import Rever from './components/assinatura-digital/gerir/Rever';

// SMS web pack
import SMSWebPack from './components/sms-web-pack/SMSWebPack';

import Editor from "./components/FileEditor/index";
import index from "./pages";

import Viewer from "./components/viewer/";
import Footer from './pages/Footer';
import MenuHeader from './pages/MenuHeader';
import history from './pages/history';

import Dashboard from './components/selo-digital/dashboard';

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
          <Route exact path={CONSTANT.SELO_DIGITAL} component={SeloDigital}/> 
          <Route exact path={SELO_DIGITAL.CreateAPIFlow} component={CreateAPIFlow}/> 
          <Route exact path={SELO_DIGITAL.CreateBusinessFlow} component={CreateBusinessFlow}/> 
          <Route exact path={SELO_DIGITAL.FlexComponent} component={FlexComponent}/> 
          <Route exact path={SELO_DIGITAL.FlexForm} component={FlexForm}/> 
          <Route exact path={SELO_DIGITAL.MyFlexForm} component={MyFlexForm}/> 
          <Route exact path={SELO_DIGITAL.Executar} component={ExecuteBusinessFlow}/> 
          <Route exact path={SELO_DIGITAL.ListMyBusiness} component={ListMyBusiness}/>
          <Route exact path={SELO_DIGITAL.ListOrganization} component={ListOrganization}/>
          <Route exact path={SELO_DIGITAL.Dashboard} component={Dashboard}/> 


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

          {/** routes sms webpack**/}
          <Route exact path={CONSTANT.SMS_WEB_PACK} component={SMSWebPack}/> 

          <Footer></Footer>
      </Router>
     </BrowserRouter>
     
 );

    }

}

export default Routes;
import React, { Fragment } from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import CSRComponent from './CSRComponent';
import ListFlexComponent from './ListFlexComponent';
import FlexForm from './FlexForm';
import Customize from './Customize';


var i=0;
const totalComponent = 3;
var customize={};
var CSR={};
var component={};
var fform={};

export default class MyFlexForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      submitFromOutside: false,
      index:0
    };
    this.toRender = this.toRender.bind(this)
    this.goForwardHandler = this.goForwardHandler.bind(this)
    this.goBackHandler = this.goBackHandler.bind(this)

  }
   // Callback the data inserted in forms
   callbackFunction(data) {
    if (data.from ==="customize")
      customize = data;
    if (data.from ==="CSR")
      CSR = data;
    if (data.from ==="component")
      component = data;
    if (data.from ==="fform")
      fform = data;

     //console.log(data);
     //console.log('customize: ', customize);
     //console.log('CSR: ', CSR);
     
    
     i=i+1;
     if (i <=totalComponent ){
      this.setState({index:i,submitFromOutside:false });
     } 

  }

  goForwardHandler = (event) => {
    this.setState({submitFromOutside:true });
  }

  goBackHandler(){

    if (i <=totalComponent && i>=1){
      i=i-1;
      this.setState({index:i});
    }
  }

  toRender(){
    switch (this.state.index){
    case 0:
      return <FlexForm fform={fform} submitFromOutside={this.state.submitFromOutside}  parentCallback={this.callbackFunction.bind(this)}/>;
      //return <Customize customize={customize} submitFromOutside={this.state.submitFromOutside}  parentCallback={this.callbackFunction.bind(this)} />;
      break;
    case 1:
      return <CSRComponent CSR={CSR} submitFromOutside={this.state.submitFromOutside}  parentCallback={this.callbackFunction.bind(this)}/>;
      break;
    case 2:
      return <ListFlexComponent component={component} submitFromOutside={this.state.submitFromOutside}  parentCallback={this.callbackFunction.bind(this)}/>;
      break;
    case 3:
      return <FlexForm fform={fform} submitFromOutside={this.state.submitFromOutside}  parentCallback={this.callbackFunction.bind(this)}/>;
      break;
    default:
      return <div>no Component</div>;
    }
  }
  
  render() {
    const componentToRender = this.toRender();

    return (
      <Container>
        {componentToRender}
        <br/>
        <Row md={6}>
          <Col>
              <Button className="button-right" variant="outline-primary" onClick={this.goBackHandler}>Anterior</Button>
          </Col>
          <Col>
              <Button className="button-right" variant="outline-primary" onClick={this.goForwardHandler}>Seguinte</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

import React, { Fragment } from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import CSRComponent from './CSRComponent';
import ListFlexComponent from './ListFlexComponent';
import FlexForm from './FlexForm';
//import Customize from './Customize';
import MyFlexForm from './MyFlexForm';

var i = 0;
const totalComponent = 2;
var component = {};
var fform = {};

export default class CreateAPIFlow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      submitFromOutside: false,
      index: 0,
      orgId: ''
    };
    this.toRender = this.toRender.bind(this)
    this.goForwardHandler = this.goForwardHandler.bind(this)
    this.goBackHandler = this.goBackHandler.bind(this)

  }
  componentDidMount() {
    console.log('orgId: ', this.props.orgId);
    this.state.orgId = this.props.orgId;
    console.log('state: ', this.state);
  }
  // Callback the data inserted in forms
  callbackFunction(data) {
    if (data.from === "component")
      component = data;
    if (data.from === "fform")
      fform = data;

    //console.log(data);
    //console.log('customize: ', customize);
    //console.log('CSR: ', CSR);
    console.log('i: ', i);
    console.log('totalComponent: ', totalComponent);

    // general forward after submit
    i = i + 1;
    if (i <= totalComponent) {
      this.setState({ index: i, submitFromOutside: false });
    }

  }

  goForwardHandler = (event) => {

    if ((i !== 0) && (i !== 2))
      this.setState({ submitFromOutside: true }); // general trigger forward
    else // ListFlexComponent, its not necessary to handle data, so must forward without submit
    {
      i = i + 1;
      this.setState({ index: i, submitFromOutside: false });
    }
  }

  goBackHandler() {

    if (i <= totalComponent && i >= 1) {
      i = i - 1;
      this.setState({ index: i });
    }
  }

  toRender() {
    switch (this.state.index) {
      /* case 0:
       return <CSRComponent CSR={CSR} submitFromOutside={this.state.submitFromOutside} parentCallback={this.callbackFunction.bind(this)} />;
        break; */
      case 0:
        return <ListFlexComponent component={component}
          submitFromOutside={this.state.submitFromOutside}
          parentCallback={this.callbackFunction.bind(this)}
          orgId={this.props.orgId} />;
        break;
      case 1:
        return <FlexForm fform={fform}
          submitFromOutside={this.state.submitFromOutside}
          parentCallback={this.callbackFunction.bind(this)}
          orgId={this.props.orgId} />;
        break;
      case 2:
        return <MyFlexForm orgId={this.props.orgId} />;
        break;
      default:
        return <div>no Component</div>;
    }
  }

  render() {
    const componentToRender = this.toRender();
    var buttonForwardToRender = null;
    var buttonBeforeToRender = null;
    if (i > 0 && i < 2) {
      buttonForwardToRender = <><Col>
        <Button className="button-right" variant="outline-primary" onClick={this.goBackHandler}>Anterior</Button>
      </Col></>;
       
    }
    if ( i < 2) {
      buttonBeforeToRender = <>
        <Col>
          <Button className="button-right" variant="outline-primary" onClick={this.goForwardHandler}>Seguinte</Button>
        </Col>
        </>;
    }
    return (
      <Container>
        {componentToRender}
        <br />
        <Row md={6}>
          {
            buttonForwardToRender
          }
          {
            buttonBeforeToRender
          }
        </Row>
      </Container>
    );
  }
}

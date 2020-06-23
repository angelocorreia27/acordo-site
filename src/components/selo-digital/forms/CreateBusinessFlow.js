import React, { Fragment } from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import axiosHelper from '../../helper/axiosHelper';
import CSRComponent from './CSRComponent';
import FlexComponent from './FlexComponent';
import FlexForm from './FlexForm';
import Customize from './Customize';



var i=0;
const totalComponent = 3;
export default class MyFlexForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index:0
    };
    this.toRender = this.toRender.bind(this)
    this.clickHandler = this.clickHandler.bind(this)

  }
  toRender(){
    switch (this.state.index){
    case 0:
      return <CSRComponent/>;
      break;
    case 1:
      return <FlexComponent/>;
      break;
    case 2:
      return <FlexForm/>;
      break;
    case 3:
      return <Customize/>;
      break;
    default:
      return <div>no Component</div>;
    }
  }
  clickHandler(){
    i=i+1;
    if (i <=totalComponent){
      this.setState({index:i});
    }
  }

  render() {
    const componentToRender = this.toRender();

    return (
      <Container>
        {componentToRender}
        <br/>
        <Row>
          <Col><Button className="Button" variant="outline-primary" onClick={this.clickHandler}>Seguinte</Button></Col>
        </Row>
      </Container>
    );
  }
}

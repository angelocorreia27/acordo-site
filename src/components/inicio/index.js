import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FileMenu from './FileMenu';
class inicio extends Component {
    
    render(){

    return (
    <Container>
    <Row>
        <Col>nav left</Col>
        <Col>nav rigth</Col>
    </Row>
    <Row>
        <Col><FileMenu/></Col>

    </Row>
    </Container> );
    }
}

export default inicio;

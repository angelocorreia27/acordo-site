import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
//import {Link} from 'react-router-dom';
import FileMenu from './FileMenu';
import NavRight from '../../layout/NavRight';


class inicio extends Component {
    
    render(){

    return (
    <Container>
    <Row>
        <Col><h3>Home</h3></Col>
        
        
        <Col><NavRight/></Col>
    </Row>
    <Row>
        <Col><FileMenu/></Col>

    </Row>
    </Container> );
    }
}

export default inicio;

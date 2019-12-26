import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
//import {Link} from 'react-router-dom';
import FileMenu from './FileMenu';
import NavRight from '../../layout/NavRight';
import Auth from '../auth/auth';

class inicio extends Component {

    render(){
    
        return (
    <Container>
    <Row>
    <Col><Auth loc="teste"/></Col> 
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

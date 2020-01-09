import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
//import {Link} from 'react-router-dom';
import FileMenu from './FileMenu';
import NavRight from '../../layout/NavRight';
import Home from '../../layout/Home/home';
import Auth from '../auth/auth';

class inicio extends Component {

    render(){
    
        return (
    <Container>
    <Row>
    <Col><Auth loc="teste"/></Col> 
        <Col><Home/></Col>
        
        
        <Col></Col>
    </Row>
    <Row>
        <Col></Col>

    </Row>
    </Container> );
    }
}

export default inicio;

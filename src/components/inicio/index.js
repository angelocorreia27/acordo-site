import React, { Component } from 'react';
import { Container, Row, Col, Nav, Navbar} from 'reactstrap';
import {Link} from 'react-router-dom';
import FileMenu from './FileMenu';
class inicio extends Component {
    
    render(){

    return (
    <Container>
    <Row>
        <Col style={{backgroundColor: "lightblue" }}> 
        
           <Navbar className="NavBar" bg="primary" variant="dark">
           <Nav className="Nav"><strong>  Signed in as: </strong> <a href="login">Login</a></Nav>
        </Navbar>
        

</Col>
        <Col></Col>
    </Row>
    <Row>
        <Col><FileMenu/></Col>

    </Row>
    </Container> );
    }
}

export default inicio;

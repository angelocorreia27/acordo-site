import React, { Component } from 'react';
import { Container, Row, Col, Nav, Navbar} from 'reactstrap';
import {Link} from 'react-router-dom';
import FileMenu from './FileMenu';
import NavRight from '../../layout/NavRight';


class inicio extends Component {
    
    render(){

    return (
    <Container>
    <Row>
<<<<<<< HEAD
        <Col>nav left</Col>
        <Col><NavRight/></Col>
=======
        <Col style={{backgroundColor: "lightblue" }}> 
        
           <Navbar className="NavBar" bg="primary" variant="dark">
           <Nav className="Nav"><strong>  Signed in as: </strong> <a href="login">Login</a></Nav>
        </Navbar>
        

</Col>
        <Col></Col>
>>>>>>> d928456ea7bc287809f191e9752fe9f040ca4c94
    </Row>
    <Row>
        <Col><FileMenu/></Col>

    </Row>
    </Container> );
    }
}

export default inicio;

import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'
import { Container, Row, Col} from 'reactstrap';
class login extends Component {
    constructor(props){
        super(props);
    }
   
 render(){

        return(
            
           
    <Container> 
            <Row> 
                <Col style={{backgroundColor: "lightblue" }}></Col> 
                <Col> <h1>Log in to DocuSign</h1> </Col>
          <Col>
 <Row></Row>
  <form>  
    <label>Email address</label><br></br>
    <input type="email" placeholder="Enter email"/><br></br>
    <label>Password</label><br></br>
    <input type="password" placeholder="Password"/><br></br>
    </form> <br></br>
   <Button className="warning" type="submit"> LOG IN </Button>
   
          </Col>
       </Row>
 </Container>
       
        )
        
    }
}export default login;
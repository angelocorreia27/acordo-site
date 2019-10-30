import React, { Component } from 'react';
//import Home from "./component/Home";
import { Card, Form } from 'react-bootstrap';
//import ':react-native-svg';
//import logo from './logo.svg';
import './App.css';
import './index.css';

import {
    NavButton,

} from 'react-svg-buttons'
 
class App extends Component{
   
    constructor(props) {
        super(props);
        this.sayHello = this.sayHello.bind(this);
             }

             state = {
                isOption: this.props.isOption,
                
                loadCard: false,
               
            };
        
            cardReloadHandler = () => {
                this.setState({loadCard: true});
                setInterval(() => {
                    this.setState({loadCard: false});
                }, 3000);
            };
        
           
     sayHello(){
         alert('Hello add Document');
     }
             
      render(){

    return(
<div className="App">
  {/*  <img src={logo} height= "80" all="Anga"/> */}
        <center>
        <Card>
      <Form>

  <Card.Body>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Card.Title id= "position_title">
        Drop the documents here to get start</Card.Title>
        
       <NavButton variant= "primary" direction="right" opened={false} onClick={this.sayHello}/>       
       
         
  </Card.Body>
 
 </Form>
</Card>
</center>
</div> 
    );
    
}

}

export default App;

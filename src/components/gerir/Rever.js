import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button, Card, Form} from 'react-bootstrap'
import AddModal from "./AddModal"
import axios from "axios";
import axiosHelper from '../helper/axiosHelper';
import * as env from '../../env';

const queryString = require('query-string');
let id = null;
class Rever extends Component {

constructor(props){
super(props)
this.state = {
    subject:'',
    text:'',
    to:''
}
this.handleChange = this.handleChange.bind(this);
this.handleEndpoint = this.handleEndpoint.bind(this);

const url = window.location.search;
console.log('url', url);
const param = queryString.parse(url);
id=param.negotiationId;

}

handleChange(event) {
  this.setState({ [event.target.name]: event.target.value })
}

async handleEndpoint () {
  
  const paramHeaders = {headers: {'Accept': 'application/json',
  'Content-type': 'multipart/form-data'}
, withCredentials: true}

  const data = new FormData(); 
  /*
    "id"  // negotiation id
    "subject" // assunto
    "text" // mensagem 
    "to"  // email to separated by coma
  */
 console.log('id', id);
 console.log('subject', this.state.subject);
 console.log('text', this.state.text);
 console.log('to', this.state.to);


  data.append('id', id);
  data.append('subject', this.state.subject);
  data.append('text', this.state.text);
  data.append('to', this.state.to);

  const url = env.httpProtocol
  +env.serverHost
  +':'+env.serverPort
  +'/negotiation/send';

  let negotiationId = await axiosHelper.axiosPost(url,data, paramHeaders);


  window.location.href = '/gerir';


}


render(){


return (


 <Form className="formBasicEnviar">  
   
<h2>Rever e enviar</h2>
    <br></br>    
   <Form.Group controlId="formBasicEnviar">
    <Form.Label>Assunto</Form.Label>
    <Form.Control type="email" placeholder="introduzir assunto" name="subject" onChange={this.handleChange} />
   </Form.Group>
  
   <Form.Group controlId="ControlTextArea">
    <Form.Label>Mensagem de correio eletronico</Form.Label>
    <Form.Control as="textarea" placeholder= "introduzir mensagem" name="text" onChange={this.handleChange} />
  </Form.Group>

  <Form.Group controlId="ControlText">
    <Form.Label>Para</Form.Label>
    <Form.Control placeholder= "name1@example.com, name2@example.com " name="to" onChange={this.handleChange} />
  </Form.Group> 

<Button variant='danger'>Voltar</Button> <Button onClick={this.handleEndpoint} variant='primary'>Enviar</Button>
 
</Form>
)

}}

export default Rever;
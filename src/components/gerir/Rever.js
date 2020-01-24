import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button, Card, Form} from 'react-bootstrap'
import AddModal from "./AddModal"
import axios from "axios";
import axiosHelper from '../helper/axiosHelper';
import * as env from '../../env';
const queryString = require('query-string');

class Rever extends Component {

constructor(props){
super(props)
this.state = {
    id:'',
    subject:'',
    text:'',
    to:'',
    enviar: ['Enviar lembretes automaticos'], AddModalShow : false
}
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
//this.onChange = this.onChange.bind(this);
this.handleChecked = this.handleChecked.bind(this);
// set this, because you need get methods from CheckBox 
const url = window.location.search;
console.log('url', url);
const param = queryString.parse(url);
this.state.id=param;
console.log('param', param);
}
handleChecked () {
this.setState({isChecked: !this.state.isChecked});
}

handleChange(event) {
this.setState({value: event.target.value});
}

handleSubmit(event) {
alert('An essay submit:' +this.state.value);
event.preventDefault();
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

  data.append('id', this.state.id);
  data.append('subject', this.state.subject);
  data.append('text', this.state.text);
  data.append('to', this.state.to);

  const url = env.httpProtocol
  +env.serverHost
  +':'+env.serverPort
  +'/negotiation/send';

  let negotiationId = await axiosHelper.axiosPost(url,data, paramHeaders);

  console.log('negotiationId', negotiationId);

  //window.location.href = '/gerir/rever?negotiationId='+negotiationId;

  /*
  let
  axios.post("http://localhost:8000/negotiation/send ", {
    "email": "elias.lima@nosi.cv",
    "message": "teste" 
  })
  .then(function (response) {
    console.log(response);
  })
  */
}


render(){


return (


 <Form className="formBasicEnviar">  
   
<h2>Rever e enviar</h2>
    <br></br>    
   <Form.Group controlId="formBasicEnviar">
    <Form.Label>Assunto</Form.Label>
    <Form.Control type="email" placeholder="introduzir assunto" value={this.state.subject} onChange={this.handleChange} />
   </Form.Group>
  
   <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Mensagem de correio eletronico</Form.Label>
    <Form.Control as="textarea" placeholder= "introduzir mensagem" value={this.state.text} onChange={this.handleChange} rows="3" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Para</Form.Label>
    <Form.Control as="textarea" placeholder= "name@example.com, " name="to" value={this.state.to} onChange={this.handleChange} rows="3" />
  </Form.Group> 

<Button variant='danger'>Voltar</Button> <Button onSubmit={this.handleChange} href= "/Review" variant='primary'>Enviar</Button>
 
</Form>
)

}}

export default Rever;
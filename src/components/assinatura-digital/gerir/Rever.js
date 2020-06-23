import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button, Card, Form} from 'react-bootstrap'
import AddModal from "./AddModal"
import axios from "axios";
import axiosHelper from '../../helper/axiosHelper';
import * as env from '../../../env';
import {ClipLoader} from "react-spinners";
import paramHelper from '../../helper/paramHelper';
 
let id = null;
class Rever extends Component {

constructor(props){
super(props)
this.state = {
    subject:'',
    text:'',
    to:'',
    loading: false
}
this.handleChange = this.handleChange.bind(this);
this.handleEndpoint = this.handleEndpoint.bind(this);

// get param and decode
const param = paramHelper.base64ParamDecode();

id=param.id;

}

handleChange(event) {
  this.setState({ [event.target.name]: event.target.value })
}
onChange() {
 this.setState(
 <ClipLoader as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
            size="8"
            color="white"
            >
            </ClipLoader>)
}
async handleEndpoint () {

  this.setState({ loading: true });

  //Faking API call here
  setTimeout(() => {
    this.setState({ loading: false });
  }, 9000);
  
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

  window.location.href = '/assinatura-digital/gerir';


}


render(){
  const {loading} = this.state;

return (


 <Form className="formBasicEnviar">  
   
<h2 className="title">Rever e enviar</h2>
   <Form.Group controlId="formBasicEnviar">
    <Form.Label>Assunto</Form.Label>
    <Form.Control type="email" placeholder="introduzir o assunto" name="subject" onChange={this.handleChange} />
   </Form.Group>
  
   <Form.Group controlId="ControlTextArea">
    <Form.Label>Mensagem de correio eletronico</Form.Label>
    <Form.Control as="textarea" placeholder= "introduzir a mensagem" name="text" onChange={this.handleChange} />
  </Form.Group>

  <Form.Group controlId="ControlText">
    <Form.Label>Par<i className="fa fa-refresh fa-spin"></i>a</Form.Label>
    <Form.Control placeholder= "name1@example.com, name2@example.com " name="to" onChange={this.handleChange} />
  </Form.Group> 

 <Button variant="outline-primary" className="buttonLoad" onClick={this.handleEndpoint} 
 className='primary' >
  {loading && (
  <i className="fa fa-refresh fa-spin"></i>)}
  {loading && <span>loading</span>}
  {!loading && <span>Enviar</span>}</Button>

</Form>
)

}}

export default Rever;
import React, {Component} from "react";
import {Link} from "react-router-dom";
import Dropzone from '../FileEditor/Dropzone';
import {Button, Row, Col, Card} from 'react-bootstrap';
import AddModal from "./AddModal"
import * as env from '../../env';
import axiosHelper from '../helper/axiosHelper';

const queryString = require('query-string');

class AddDestinatar extends Component {

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

<Row m={9}>
  <Col>
   <div className="pagina">

    <h2>Rever e enviar</h2>

     <h4>Message to Recipients</h4>  <div className="mensage"> <Link><p>adicionar mensagem privada</p></Link></div>
    
  <br></br>             
  <div>  <strong> Assunto da mensagem </strong><br></br>
  <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} size="40"/>
</div>
<br></br>
<div>
  <strong>Mensagem de correio eletronico</strong>
  </div>
  <br></br>
<textarea placeholder= "introduzir mensagem" name="text"  value={this.state.text} onChange={this.handleChange} cols={50} rows={3}/>

<br></br>

<div>
  <strong>Para</strong>
  </div>
  <br></br>
<input  type="text" name="to" value={this.state.to} onChange={this.handleChange} cols={50} rows={3}/>

<br></br>
<Card>

</Card>
<br></br>
<div className = "Btn-buttom">
<Button variant='info' href="/">Voltar</Button> <Button className="primary" onSubmit={this.handleChange} href= "/gerir">Enviar</Button>
</div> 

</div>
</Col>
</Row>
)

}}

export default AddDestinatar;
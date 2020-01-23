import React, {Component} from "react";
import {Link} from "react-router-dom";
import Dropzone from '../FileEditor/Dropzone';
import {Button, Row, Col, Card} from 'react-bootstrap';
import AddModal from "./AddModal"
import axios from "axios";


class AddDestinatar extends Component {

constructor(props){
super(props)
this.state = {
    value: '',
    loading: 'warning',
    enviar: ['Enviar lembretes automaticos'], AddModalShow : false
}
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.handleChecked = this.handleChecked.bind(this);
// set this, because you need get methods from CheckBox 

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

handleEndpoint = () => {
  axios.post("http://localhost:8000/negotiation/send ", {
    "email": "elias.lima@nosi.cv",
    "message": "teste" 
  })
  .then(function (response) {
    console.log(response);
  })
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
<input type="test" size="40"/>
</div>
<br></br>
<div>
  <strong>Mensagem de correio eletronico</strong>
  </div>
  <br></br>
<textarea placeholder= "introduzir mensagem"value={this.state.value} onChange={this.handleChange} cols={50} rows={3}/>

<br></br>

<input className="Check" type="checkbox" onClick={this.handleEndpoint}/> Enviar lembretes automaticos  

<div>

</div>

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
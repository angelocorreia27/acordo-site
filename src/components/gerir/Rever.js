import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button, OverlayTrigger} from 'react-bootstrap'
import AddModal from "./AddModal"
import { Card, Tooltip, ButtonToolbar} from 'reactstrap';
import axios from "axios";


class Rever extends Component {

constructor(props){
super(props)
this.state = {
    value: '',
    loading: 'warning',
    enviar: ['Enviar lembretes automaticos'], AddModalShow : false
}
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.onChange = this.onChange.bind(this);
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

onChange() {
return (<Link to="Review" />)
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

let AddModalClose = () => this.setState({AddModalShow:false});

return (

<div className="pagina">
<div className="col-xs-10 col-xs-offset-1">
<link href="App.css" rel="stylesheet" type="text/css" media="all" />
{this.props.children}
</div>

<h2>Rever e enviar</h2>

<h4>Message to Recipients</h4>  <div className="mensage"><Link onClick={()=> this.setState({AddModalShow:true})}>adicionar mensagem privada</Link> <AddModal show={this.state.AddModalShow} onHide={AddModalClose}/></div>
    
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
<Button href="/FileMenu">Voltar</Button> <Button onSubmit={this.handleChange} href= "/Review" className="warning">Enviar</Button>
</div> 

</div>

)

}}

export default Rever;
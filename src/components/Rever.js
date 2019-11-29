import React, {Component, Redirect} from "react";
import {Link} from "react-router-dom";
import SelectList from 'react-widgets/lib/SelectList'
import { Button, Form, Col, Row } from 'react-bootstrap'
import { Route} from "react-router-dom"
import Review from "./Review"
import {
    Card
  } from 'reactstrap';
import Routes from "../routes";

const enviar = ['Enviar lembretes automaticos']

class Rever extends Component {
    constructor(props){
        super(props)
        this.state = {
           value: '',
           loading: 'warning',
           enviar: ['Enviar lembretes automaticos']
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox 
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
handleOnClick = () => {
  this.setState({redirect: true});
}

render(){

 /*
  var txt;
  if (this.state.isChecked) {
    txt = 'checked'
  } else {
    txt = 'unchecked'
  }*/


    return (

   <div className="pagina">
     <div className="col-xs-10 col-xs-offset-1">
       {this.props.children}
     </div>

       <h2>Rever e enviar</h2>
        
            <h4>Message to Recipients</h4>  <a className="mensage">adicionar mensagem privada</a>
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
    
    <input className="Check" type="checkbox" onChange={ this.handleChecked }/>      Enviar lembretes automaticos
           
    <br></br>
    <Card>

    </Card>
    <br></br>
  <div className = "Button">
    <Button>Voltar</Button> <Button href = "/Review" className="warning">Enviar</Button>
  </div> 
    

</div>

    )
}
}

export default Rever;
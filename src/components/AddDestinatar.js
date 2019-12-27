import React, {Component} from "react";
import {Form, Button} from 'react-bootstrap'
import { Container, Label, Row, Col} from 'reactstrap';

class AddDestinatar extends Component {

constructor(props){
super(props)
this.state = {
    
    enviar: ['Enviar lembretes automaticos']
}
}

render(){

return (
<div className= "pagina2">

<h2>Adicionar destinatarios</h2><br></br>
<div className="Remetent">
<p>REMETENTE</p>
<a> elias lima</a>
</div>
<Container> 
            <Row> 
                <Col style={{backgroundColor: "lightblue" }}></Col> 
                <Col> <h1></h1> </Col>
          <Col>
 <Row></Row>
  <form>  
    <label require>Nome</label><br></br>
    <input type="password" placeholder="Password" size="30"/><br></br><br></br>
    <label>Endereço de correio eletrónico Destinatário 1 </label><br></br>
    <input type="email" placeholder="Enter email" size="30"/><br></br>
    </form> <br></br>
    <Button>ADICIONAR DESTINATARIO</Button>
    <br></br><br></br>

<p>Depois de um envelope ter sido enviado para todos os destinatários e os documentos assinados, cada destinatário irá receber uma cópia concluída.</p>


    <Button type="bottom"> Voltar </Button>  <Button className="warning" type="bottom"> Seguinte</Button>
   
          </Col>
       </Row>
 </Container>

</div>
)

}}
export default AddDestinatar;
import React, {Component} from "react";
import {Button,Table,Form, FormControl} from 'react-bootstrap';


class Review extends Component {
    constructor(props){
        super(props);
       
} 

render(){
    return ( 
<div className="page">

         <header>
       <h3>Caixa de entrada</h3> 
       
 <div className= "form">
  <Form inline>
      <FormControl type="text" placeholder="Caixa de entrada" className="mr-sm-2" />
      <Button className="search"variant="outline-success">Search</Button>
    </Form>
    </div>

        </header>

  <Table responsive>
  <thead>
    <tr> 
      <th>Assunto</th>
      <th>Estado</th>
      <th>Ultima alteracao</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Utilize o servico DocSign</td>
      <td>Concluido</td>
      <td>Time Concluido
      <div className="select">
    <select id="Mover" name="Mover">
      <option value="mover">Mover</option>
    </select>
    </div>
    </td>
      
    </tr>
    <tr>
      <td>Utilize o servico DocSign</td>
      <td>Concluido</td>
      <td>Time Concluido
      <div className="select">
    <select id="Mover" name="Mover">
      <option value="mover">Mover</option>
    </select>
    </div>
    </td>
    </tr>
</tbody>
</Table>


    </div>

      )
    
    }
}
    

export default Review;
import React, {Component} from "react";
//import {Link} from "react-router-dom";
import {Button,Table} from 'react-bootstrap';
//import {Card} from 'reactstrap'

class Review extends Component {
    constructor(props){
        super(props);
       
} 

render(){
    return ( 
<div className="page">

         <header>
       <h3>Caixa de entrada</h3> 
       <form className= "example">
  <input type="text" placeholder="Pesquisar na caixa de entrada" name="search2"/>
  
</form>
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
import React, {Component} from "react";
import { Icon, Menu } from 'antd';
import {Button, Form, FormControl, Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';
const { SubMenu } = Menu;


class Review extends Component {
    constructor(props){
        super(props);
      this.handleClick = this.handleClick.bind(this);
} 

handleClick = e => {
  console.log('click ', e);
};

render(){
    return ( 
    <Row m={9}>
     <Col>
      <div className="MenuNav">
    
    <Menu
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
             <strong>ENVELOPES</strong>


       <SubMenu className ="subMenu"
            key="sub1"
            title={
            
            <span>
              
              <Icon type="mail" /> 
              <ul> <li icon="icon-sent"><a href="news.asp">Caixa de entrada</a></li> </ul></span>
                                                 

            }
          >
          </SubMenu>


          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" /> <span> <ul> <li icon="icon-sent"><a href="news.asp">Enviado</a></li> </ul> </span>
              </span>
            }
          >
          </SubMenu>


          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="carry-out"/> <span> <ul><li icon="i"><a href="contact.asp">Rascunho</a></li></ul>  </span>
              </span>
            }
          >
          
          </SubMenu>
    
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="delete" /> <span> <ul><li><a href="about.asp">Eliminado</a></li></ul> </span>
              </span>
            }
          >        
          </SubMenu>


          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" /> <span> <span> <ul><li><a href="about.asp">PowerForms</a></li></ul> </span>
                 </span>
              </span>
            }
          >
          
          </SubMenu>
    
        </Menu>
    
    </div>


    </Col>

  <Col>
<div className="page">
  
   <header>
           
        <h3 style={{fontFamily: "Lucida Console"}}> Caixa de entrada </h3>
              
 <div className= "form">
      <Form inline>
      
               <FormControl type="text" placeholder="Caixa de entrada" className="mr-sm-2"/>
        
               <span>
                <Icon type="search"/></span>  <Button className="search">Search</Button>
    
      </Form><br></br>
   
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
      <option value="mover">Rencaminhar</option>
      <option value="mover">Criar uma copia</option>
      <option value="mover">Ver historico</option>
      <option value="mover">Eliminar</option>
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
      <option value="mover">Rencaminhar</option>
      <option value="mover">Criar uma copia</option>
      <option value="mover">Ver historico</option>
      <option value="mover">Eliminar</option>
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
      <option value="mover">Rencaminhar</option>
      <option value="mover">Criar uma copia</option>
      <option value="mover">Ver historico</option>
      <option value="mover">Eliminar</option>
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
      <option value="mover">Rencaminhar</option>
      <option value="mover">Criar uma copia</option>
      <option value="mover">Ver historico</option>
      <option value="mover">Eliminar</option>
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
      <option value="mover">Rencaminhar</option>
      <option value="mover">Criar uma copia</option>
      <option value="mover">Ver historico</option>
      <option value="mover">Eliminar</option>
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
      <option value="mover">Rencaminhar</option>
      <option value="mover">Criar uma copia</option>
      <option value="mover">Ver historico</option>
      <option value="mover">Eliminar</option>
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
      <option value="mover">Rencaminhar</option>
      <option value="mover">Criar uma copia</option>
      <option value="mover">Ver historico</option>
      <option value="mover">Eliminar</option>
    </select>
    </div>
    </td>
      
    </tr>

</tbody>
</Table>


    </div>
    </Col>

</Row>

    )
    
    }
}
    

export default Review;
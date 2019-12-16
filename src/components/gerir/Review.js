import React, {Component} from "react";
import {Button,Table,Form, FormControl} from 'react-bootstrap';
import { Icon, Card, Menu, Row, Col } from 'antd';
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
    <Row>
     <Col>
      <div className="MenuNav">
    
    <Menu
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        ><SubMenu
            key="sub1"
            title={
            <span>
                <Icon type="mail" />
                <span> Caixa de entrada </span>
              </span>
            }
          >
          </SubMenu>


          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span> Enviado </span>
              </span>
            }
          >
          </SubMenu>


          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="carry-out"/>
                <span> Rascunhos </span>
              </span>
            }
          >
          
          </SubMenu>
    
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="delete" />
                <span> Eliminado </span>
              </span>
            }
          >        
          </SubMenu>


          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span> PowerForms </span>
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
        
               <Button className="search"variant="outline-success" icon="search">Search</Button>
    
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
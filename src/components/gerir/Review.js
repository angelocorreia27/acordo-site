import React, {Component} from "react";
import { Icon, Menu } from 'antd';
import {Button, Form, FormControl, Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';
import axios from 'axios';
const { SubMenu } = Menu;


class Review extends Component {
    constructor(props){
        super(props);
      this.handleClick = this.handleClick.bind(this);
} 

handleClick = e => {
  console.log('click ', e);
};

/* Por fazer alteracao desta funcao */
onClickButton = () => { 
  axios.post("http:localhost:8000/negotiation/upload",{ 
    "id":"1",
    "fileData":"FileData"

  }).then(res => { // then print response status
         console.log(res.statusText); 
    
      })
     }


render(){
    return ( 

        <Row m={9}>
     <Col>
     <div className="MenuNav"> 
    
    <Menu className="Menu"
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >

<Button className= "buttnovo" onClick={this.onClickButton} href="/inicio">Novo</Button><br></br><br></br>
           

             <strong>Acordos</strong>


       <SubMenu className ="subMenu"
            key="sub1"
            title={
            
            <span className="sub-envelopes">
              
              <Icon type="mail" /> 
              <ul> <li icon="icon-sent"><a href="news.asp">Recebidos</a></li> </ul></span>
                                                 

            }
          >
          </SubMenu>


          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" /> <span> <ul> <li icon="icon-sent"><a href="news.asp">Enviados</a></li> </ul> </span>
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

    
          <br></br>
          <strong>Vistas Rapidas</strong>


<SubMenu className ="subMenu"
     key="sub1"
     title={
     
     <span className="sub-envelopes">
       
       <Icon type="exclamation-circle" /> 
       <ul> <li icon="icon-sent"><a href="news.asp">Ação necessaria</a></li> </ul></span>
                                          

     }
   >
   </SubMenu>


   <SubMenu
     key="sub2"
     title={
       <span>
         <Icon type="clock-circle" /> <span> <ul> <li icon="icon-sent"><a href="news.asp">A aguardar por outros</a></li> </ul> </span>
       </span>
     }
   >
   </SubMenu>


   <SubMenu
     key="sub4"
     title={
       <span>
         <Icon type="warning"/> <span> <ul><li icon="i"><a href="contact.asp">Expira em breve</a></li></ul>  </span>
       </span>
     }
   >
   
   </SubMenu>

   <SubMenu
     key="sub1"
     title={
       <span>
         <Icon type="check" /> <span> <ul><li><a href="about.asp">Concluido</a></li></ul> </span>
       </span>
     }
   >        
   </SubMenu>

        </Menu>
    
    </div>


    </Col>

  <Col>
<div className="page">
 <div className="header">  
   <header>
      <br></br>
        <h3 style={{fontSize: '24px', fontFamily: "Maven Pro,Helvetica Neue,HelveticaNeue,Helvetica,Arial,sans-serif" }}> <strong>Gestão de acordos</strong></h3> <br></br>
              
 <div className= "form">
      <Form inline>
          <FormControl type="text" placeholder="Ultimos acordos" className="mr-sm-2"/><Button className="search">Search</Button>
    
      </Form>
   
    </div>

        </header>
        

  <Table responsive>
  <thead>
    <tr> 
      <th>Titulo</th>
      <th>Estado</th>
      <th>Ultima revisao</th>
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
    </div>
    </Col>

</Row>
    )
    
    }
}
    

export default Review;
import React, { Component } from "react";
import { Icon, Menu } from 'antd';
import { Button, Form, FormControl, Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';
import axiosHelper from '../../helper/axiosHelper';
import * as env from '../../../env';
import paramHelper from './../../helper/paramHelper';
import authHelper from '../../helper/authHelper';

const { SubMenu } = Menu;
const sended = "/assinatura-digital/gerir?r="+ paramHelper.base64ParamEncode('name=Enviados');
const arquived = "/assinatura-digital/gerir?r="+ paramHelper.base64ParamEncode('name=Arquivado');
const actionNeeded = "/assinatura-digital/gerir?r="+ paramHelper.base64ParamEncode('name=Ação necessária');
const waitOthers = "/assinatura-digital/gerir?r="+ paramHelper.base64ParamEncode('name=A aguardar por outros');
const toExpire = "/assinatura-digital/gerir?r="+ paramHelper.base64ParamEncode('name=Expira em breve');
const done = "/assinatura-digital/gerir?r="+ paramHelper.base64ParamEncode('name=Concluido');


var filter = null;

class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acordos: [],
      ...props,
      //  loading: true

    }
    
    this.handleClick = this.handleClick.bind(this);
    this.handler = this.handlePa$$w0rd

    const param = paramHelper.base64ParamDecode();
    if (param && param.name){
      filter= param.name ? param.name : 'Recebidos';
      console.log('filter: ', filter);
    }else{
      filter='inbox';
    }
  }

  async componentDidMount() {

    const url = env.httpProtocol
      + env.serverHost
      + ':' + env.serverPort
      + '/negotiation/';

    const paramHeaders = {
      headers: { 'Accept': 'application/json'
     }
      , withCredentials: true
    }

    let acordosToFilter = await axiosHelper.axiosGet(url, paramHeaders);
    let acordos =null;
    console.log('filter: ', filter);

    /**
     * 
     * Recebidos:  Todos que não é owner  mas existe no Negotiation Partie
      Enviados: Todos que é owner (json recebido = email em sessão) 
      Arquivado: flag archived = true
      Acção no item: 
          Rencaminhar: Copiar ultima versão para novo editor 
          Ver historico: abrir um ecrã com todas as versões 
          Arquivar: actualizar archived para 1 
      Vista Rapida 
      1- Acção Necessaria: os que flag mustAgree = 1 (ver se necessário)
      2- Aguarda por outros: os os que dealAgreed = 0  se  (mustAgreee = 1)  (ver se necessário)
      3 - Experira em breve os que expiredData é em 1 mês  (ver se necessário)
      4 - Concluido: assinado por ambos (quando é necessario assinar) (ambos parties deal agree true)
     */
    
      switch (filter){
        case 'Enviados':
          // code block
          acordos = acordosToFilter.filter(f => f.email ===authHelper.GetStore('email'));
          break;
        case 'Arquivado':
          // code block
          acordos = acordosToFilter.filter(f => f.arquived ===true);
          break;
        //case 'Ação necessária':
            // code block
          //break;
      // case 'A aguardar por outros':
            // code block
            //break;
        //case 'Expira em breve':
            // code block

          //break;
        //case 'Concluido':
            // code block
          //break;
        default:
          // code block
          acordos = acordosToFilter.filter(f => f.email !==authHelper.GetStore('email'));
      }
      // authHelper.
      
      this.setState({ acordos })
  
  }

  handleClick = e => {
    console.log('click ', e);
  };

  componentDidUpdate() {
    setTimeout(() => { this.setState({ loading: !this.state.loading && this.state.acordos > 0 }) }, 1000);
  }

  handler(e) {
    this.props.filterUser(e.target.value);
  }

  render() {

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
              <h2 className="title">{filter.charAt(0).toUpperCase() + filter.slice(1) }</h2>
              <SubMenu className ="subMenu"
                key="sub-inbox"
                title={
                  <span className="sub-envelopes">
                    <Icon type="mail" />
                    <ul> <li icon="icon-sent"><a href="/assinatura-digital/gerir">Recebidos</a></li> </ul></span>
                }>
              </SubMenu>
              <SubMenu
                key="sub-sended"
                title={
                  <span>
                    <Icon type="appstore" /> <span> <ul> <li data-tooltip="Enviado" data-collapsed-nav-tooltip="true"><a href={sended}>Enviados</a></li> </ul> </span>
                  </span>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub-archived"
                title={
                  <span>
                    <Icon type="delete" /> <span> <ul><li><a href={arquived}>Arquivado</a></li></ul> </span>
                  </span>
                }
              >
              </SubMenu>
              {/* <br></br>
              <strong>Vistas Rapidas</strong>
              <SubMenu className="submenu"
                key="sub-action-needed"
                title={

                  <span className="sub-envelopes">

                    <Icon type="exclamation-circle" />
                    <ul> <li icon="icon-sent"><a href={actionNeeded}>Ação necessaria</a></li> </ul></span>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub-wait-others"
                title={
                  <span>
                    <Icon type="clock-circle" /> <span> <ul> <li icon="icon-sent"><a href={waitOthers}>A aguardar por outros</a></li> </ul> </span>
                  </span>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub-to-expire"
                title={
                  <span>
                    <Icon type="warning" /> <span> <ul><li icon="i"><a href={toExpire}>Expira em breve</a></li></ul>  </span>
                  </span>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub-done"
                title={
                  <span>
                    <Icon type="check" /> <span> <ul><li><a href={done}>Concluido</a></li></ul> </span>
                  </span>
                }
              >
              </SubMenu> */}
            </Menu>
          </div>
        </Col>
        <Col>
          <div className="page">
            <div className="header">
              <header>
                
                  <Form>
                    <Form.Row>
                      <Col xs={7}>
                        <FormControl type="text" placeholder="search" className="mr-sm-2" />
                      </Col>
                      <Col>
                        <Button onChange={this.handler}>Search</Button>
                      </Col>
                    </Form.Row>
                  </Form>
              </header>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Estado</th>
                    <th>Ultima revisão</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.acordos && this.state.acordos.length > 0 ? (
                    this.state.acordos.map(dados => (
                      
                      <tr key={dados.id}>
                        <td><a href={"/viewer?r="+paramHelper.base64ParamEncode('type=negotiations&id='+dados.id)}>{dados.title}</a></td>
                        <td>Concluido</td>
                        <td>Time Concluido </td>
                        <td className="select">
                          <select id="accao" name="accao">
                            <option value="">-</option>
                            <option value="Rencaminhar">Rencaminhar</option>
                            <option value="Ver historico">Ver historico</option>
                            <option value="Arquivar">Arquivar</option>
                          </select>
                        </td>
                      </tr>

                    )
                    )) : (
                      <tr>
                       <td>no data</td>
                      </tr>
                    )}
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Inbox;
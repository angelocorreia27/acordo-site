import React from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import 'antd/dist/antd.css';
import axiosHelper from '../../helper/axiosHelper';
import * as  reactBootstrap from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import RenderPage from "../../renderPage/RenderPage";
import RenderComponent from "../../renderPage/RenderComponent";
import {SELO_DIGITAL} from '../../../store/constant';
const { SubMenu } = Menu;
var form = {};

export default class MyFlexForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listCommod: [],
      listForm: [],
      listCommoditie_ff: [],
      loading: true,
    };
    this.handleSubMenuSelectionChange = this.handleSubMenuSelectionChange.bind(this);
  }

  async  componentDidMount() {

    const paramHeaders = { headers: { 'Accept': 'application/json' }, withCredentials: true };

    let resultF = null; //await axiosHelper.axiosGet('/ff/list/', paramHeaders);
    console.log('resultF', resultF);
    if (resultF){
      this.setState({ listForm: resultF.ebit_ffs });
    }
    let resultCommodities = null; //await axiosHelper.axiosGet('/commoditie/list/', paramHeaders);
    if (resultCommodities){
      this.setState({ listCommod: resultCommodities.ebit_commodities });
    }
    console.log('CommoditieList', this.state.listCommod);

    let resultCommoditie_ff = null; // await axiosHelper.axiosGet('/commoditie_ff/list/', paramHeaders);
    if (resultCommoditie_ff){
      this.setState({ listCommoditie_ff: resultCommoditie_ff.ebit_commoditie_ffs });
    }
    console.log('Commoditie_ff', this.state.listCommoditie_ff);
  }



  handleClick = e => {
    console.log('click ', e);
  };

  handleSubMenuSelectionChange(e) {
    const countryData = e.itemData;
    if (countryData.cities) {
      this.setState({
        tabPanelIndex: 0,
        countryData: e.itemData,
        citiesData: countryData.cities
      });
    }
  }

  render() {
    var index
    return (
      <Container>
        <Row>
          <Col><Button className="Button" variant="outline-primary" href={SELO_DIGITAL.CreateBusinessFlow} >Novo</Button></Col>
        </Row>
        <br/>
        <Row>
          <Col>
              <Card>
                <Card.Header>
                  <Card.Title as="h5">Meus Flex Forms</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col>
                      <div className="container">
                        <div className="left-content ">
                          <Menu
                            onClick={this.handleClick}
                            //style={{ width: 200 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={index}
                            mode="inline"
                            theme="blue">
                            {this.state.listCommod.length > 0 ? (
                              this.state.listCommod.map((item, index) => (
                                <SubMenu
                                  key={index}
                                  title={
                                    <span key={index}>
                                      <span>{item.name}</span>
                                    </span>}>
                                  <Menu.ItemGroup key={index} >
                                    {this.state.listForm.length > 0 ? (
                                      this.state.listForm.map((items, index) => (
                                        <Menu.Item key={index}>{items.name}</Menu.Item>
                                      )
                                      )) : (
                                        <Menu.Item>Loading...</Menu.Item>
                                      )}
                                  </Menu.ItemGroup>
                                </SubMenu>
                              )
                              )) : (
                                <SubMenu>Loading...</SubMenu>
                              )}
                          </Menu>
                        </div>
                        <div className="right-content">
                          <div className="title-container">
                            <div className="Form-name"></div>
                            <div className="rending-form">
                              <RenderPage id={84} />
                              <RenderComponent name={'Dado'} />
                            </div>
                          </div>
                        </div>
                        <div className="button-toolbar">
                          <reactBootstrap.ButtonToolbar>
                            <Button variant="outline-primary" >Editar</Button>
                            <Button variant="outline-primary" >Arquivar</Button>
                          </reactBootstrap.ButtonToolbar>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

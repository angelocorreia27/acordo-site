import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import 'antd/dist/antd.css';
import axiosHelper from '../../helper/axiosHelper';
import authHelper from '../../helper/authHelper';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Base64 } from 'js-base64';
import * as env from '../../../env';
import ModalPageRander from './ModalPageRander';

const { SubMenu } = Menu;

export default class MyFlexForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      popup: false,
      orgId: '',
      listCommod: [],
      listCommoditiesFF: []
    };
    this.handleSubMenuSelectionChange = this.handleSubMenuSelectionChange.bind(this);
    this.loadCommoditieFF = this.loadCommoditieFF.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  async componentDidMount() {
    this.state.orgId = this.props.orgId;

    console.log('commoditie state: ', this.state);
    console.log('commoditie props: ', this.props);

    const token = Base64.encode(await authHelper.getHeaderToken());
    const paramHeaders = {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      }, withCredentials: true
    };

    const resultCommodities = await axiosHelper.axiosGet(env.dataBaseEndPoint + '/commoditie/list/' +this.props.orgId, paramHeaders);
    var listCommodFF = [];
    if (resultCommodities && resultCommodities.ebit_commodities) {
      this.setState({ listCommod: resultCommodities.ebit_commodities });
      for (var i = 0; i < this.state.listCommod.length; i++) {
        const result = await this.loadCommoditieFF(this.state.listCommod[i].id);
        listCommodFF.push(result);
      }
      this.setState({ listCommoditiesFF: listCommodFF });
    }
  }
  handleClick = e => {
    console.log('click ', e);
    this.setState({ popup: true });
  };

  hideModal = () => {
    this.setState({ popup: false });
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
  async loadCommoditieFF(cmId) {
    console.log('loadCommoditieFF ', cmId);

    const token = Base64.encode(await authHelper.getHeaderToken());
    const paramHeaders = {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      }, withCredentials: true
    };
    const resultCommoditiesFF = await axiosHelper.axiosGet(env.dataBaseEndPoint + '/commoditie_ff/list/' + cmId, paramHeaders);
    return resultCommoditiesFF.ebit_commoditie_ffs;
  }

  render() {
    var index
    return (
      <Container>
        {/* <Row>
          <Col><Button className="button-right" variant="outline-primary" href={SELO_DIGITAL.CreateAPIFlow} >Novo</Button></Col>
        </Row>
        <br /> */}
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Meus API's</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <Menu
                      onClick={this.handleClick}
                      style={{ width: 400 }}
                      //defaultSelectedKeys={['1']}
                      //defaultOpenKeys={index}
                      mode="inline"
                      theme="blue">
                      {this.state.listCommod.length > 0 ? (
                        this.state.listCommod.map((item, index) => {
                          return <SubMenu
                            key={"subMenu" + index}
                            title={
                              <span key={index}>{item.name}</span>
                            }>
                            <Menu.ItemGroup key={"menuGroup" + index} >
                              <Menu.Item key={"menuItemVer" + index}> Ver API {item.name}</Menu.Item>

                              {this.state.popup ?
                                <ModalPageRander commoditieId={item.id} commodityName={item.name}
                                  showModal={this.state.popup} hideModal={this.hideModal} />
                                : null}

                              {this.state.listCommoditiesFF.length > 0 ? (
                                this.state.listCommoditiesFF.map((innerItems, i) => {
                                  if (innerItems[i] && innerItems[i].commoditieId === item.id)
                                    return <Menu.Item key={"menuItem" + i}>{innerItems[i].ebit_commodity.name}</Menu.Item>;
                                }
                                )) : (
                                  <></>
                                )}
                            </Menu.ItemGroup>
                          </SubMenu>
                        }
                        )) : (
                          <></>
                        )}
                    </Menu>
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

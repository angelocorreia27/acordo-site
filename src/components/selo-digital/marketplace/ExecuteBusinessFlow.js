import React, { Fragment } from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import RanderPage from '../../renderPage/RenderPage';
import * as env from '../../../env';
import authHelper from '../../../components/helper/authHelper';
import axiosHelper from '../../../components/helper/axiosHelper';
import UtilHelper from '../../../components/helper/UtilHelper';
import TimeLine from '../../time-line';
var i = 0;
var totalComponent = 0
var paramHeaders = null;

export default class ExecuteBusinessFlow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      marketId: '',
      index: 0,
      dataLine: [],
      commodityMarketPlace: [],
      rendedPage: {}
    };
    this.toRender = this.toRender.bind(this)
    this.goForwardHandler = this.goForwardHandler.bind(this)
    this.goBackHandler = this.goBackHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  async componentDidMount() {
    const param = UtilHelper.base64ParamDecode(window.location.search);
    const marketId = param.marketId;
    paramHeaders = await authHelper.getHeaderWithToken();
    this.setState({ marketId: marketId });
    const result = await this.loadCommodityMarket(paramHeaders);

    if (result && result.ebit_commoditymarketplaces && result.ebit_commoditymarketplaces.length > 0) {
      // total of components
      totalComponent = result.ebit_commoditymarketplaces.length;
      this.setState({ commodityMarketPlace: result.ebit_commoditymarketplaces });
      // get all api to construct data line
      var lineObject = [];
      for (var j = 0; j < result.ebit_commoditymarketplaces.length; j++) {
        const data = await this.loadCommodity(paramHeaders, result.ebit_commoditymarketplaces[j].commodityId);
        lineObject.push({
          name: data.ebit_commodity.name,
          id: data.ebit_commodity.id
        });
      }
      this.setState({ dataLine: lineObject, rendedPage: result.ebit_commoditymarketplaces[0] });
    } else
      this.setState({ loading: false });
  };
  /* async loadMarket(paramHeaders) {
    console.log('paramHeaders: ', paramHeaders);
    const url = env.dataBaseEndPoint + '/market/listAll';
    const result = await axiosHelper.axiosGet(url, paramHeaders);
    return result;
  } */
  async loadCommodityMarket(paramHeaders) {
    const url = env.dataBaseEndPoint + '/cmp/list/' + this.state.marketId;
    const result = await axiosHelper.axiosGet(url, paramHeaders);
    return result;
  }

  async loadCommodity(paramHeaders, commodity) {
    const url = env.dataBaseEndPoint + '/commoditie/' + commodity;
    const result = await axiosHelper.axiosGet(url, paramHeaders);
    return result;
  }

  // Callback the data inserted in forms
  callbackFunction(data) {
    this.setState({ rendedPage: data });
  }

  goForwardHandler = (event) => {

    i = i + 1;
    const currentPage = this.state.commodityMarketPlace[i];
    if (i <= totalComponent) {
      this.setState({ index: i, rendedPage: currentPage });
      this.submitHandler();
    }
  }

  goBackHandler() {

    if (i <= totalComponent && i >= 1) {
      i = i - 1;
      this.setState({ index: i });
    }
  }

  submitHandler = async () => {
    var ffName = '';
    var ffType = '';
    // Processar pagamento
     console.log('rendedpage: ', this.state.rendedPage.listcommoditie_ff[0].ebit_ff);
     if(this.state.rendedPage.listcommoditie_ff[0] && this.state.rendedPage.listcommoditie_ff[0].ebit_ff){
      ffName = this.state.rendedPage.listcommoditie_ff[0].ebit_ff.name;
      ffType = this.state.rendedPage.listcommoditie_ff[0].ebit_ff.type;
     }
     console.log('name:', ffName);
     console.log('type:', ffType);
     // post to externall endpoint
     /* if (ffName ==='Pagamento' && ffType ==='built-in'){
      console.log('state: ', this.state.rendedPage.data); 
      console.log('paramHeaders: ', paramHeaders); 

      */
     console.log('marketId:', this.state.marketId);
    console.log('commodityId: ', this.state.rendedPage.commodityId);
        const result = await axiosHelper.axiosPost(env.dataBaseEndPoint +
                                                   env.dataBaseAPITransactionEndPoint,
                                                  this.state.rendedPage,
                                                  paramHeaders 
                                                );
      //  console.log('result:: ', result);
    // }
  }

  toRender() {
    const k = this.state.index;
    if (this.state.commodityMarketPlace.length > 0 && this.state.commodityMarketPlace[k]) {
      const commodityId = this.state.commodityMarketPlace[k].commodityId;
      const marketId = this.state.commodityMarketPlace[k].marketId;

      return <RanderPage
        key={commodityId}
        commodityId={commodityId}
        marketId={marketId}
        parentCallback={this.callbackFunction.bind(this)}
      />;
    }

  }

  render() {
    const componentToRender = this.toRender();
    var currentLine = null;
    if (this.state.rendedPage &&  this.state.rendedPage.commodityId)
        currentLine = this.state.rendedPage.commodityId
    return (
      <Container>
        <TimeLine dataLine={this.state.dataLine} currentLine={currentLine} />
        {componentToRender}
        <br />
        <Row md={6}>
          {(i > 0) ?
            <Col>
              <Button className="button-right" variant="outline-primary" onClick={this.goBackHandler}>Anterior</Button>
            </Col> : null
          }
          <Col>
            <Button className="button-right" variant="outline-primary" onClick={this.goForwardHandler}>Seguinte</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

import React from 'react';
import {Card, Button } from 'react-bootstrap';
import axiosHelper from '../helper/axiosHelper';
import authHelper from '../helper/authHelper';
import RenderComponentForm from './RenderComponentForm';
import RenderComponentList from './RenderComponentList';
import BeatLoader from "react-spinners/BeatLoader";
import * as env from '../../env';
import { css } from "@emotion/core";
import { Base64 } from 'js-base64';
import UtilHelper from '../helper/UtilHelper';
import Pagamento from '../../components/pagamento';
const override = css`
  display: block;
  margin: 0 px;
  margin-left:25%;
  border-color: rgb(7, 172, 238);
`;

class RenderPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      commodityId:'',
      marketId:'',
      commodity: {},
      data:{},
      listcommoditie_ff: []
    };
  }

  async componentDidMount() {
    const token = Base64.encode(await authHelper.getHeaderToken());
    const paramHeaders = {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      }, withCredentials: true
    };
    const param = UtilHelper.base64ParamDecode(window.location.search);
    var commodityId = null;
    var marketId = null;

    if (this.props.commodityId) // Visualização
    {
      commodityId = this.props.commodityId;
      marketId = this.props.marketId;
    }
    else // Execução
    {
      commodityId = param.commodityId;
      marketId = param.marketId;
     // this.setState({ allowSave: true });
    }
    this.setState({commodityId:commodityId, marketId:marketId});
    const userId = 1;
    const resultCommodity = await axiosHelper.axiosGet(env.dataBaseEndPoint + '/commoditie/' + commodityId, paramHeaders);

    const result = await axiosHelper.axiosGet(env.dataBaseEndPoint + '/commoditie_ff/list/' + commodityId, paramHeaders);
    if (result && result.ebit_commoditie_ffs
      && resultCommodity && resultCommodity.ebit_commodity)
      this.setState({ commodity: resultCommodity.ebit_commodity, listcommoditie_ff: result.ebit_commoditie_ffs, loading: false });
    else
      this.setState({loading:false});

    console.log('listcommoditie_ff: ', this.state.listcommoditie_ff);
  }

  // send data to parent, ExecuteBusinessFlow
  sendData = () => {
    this.props.parentCallback(this.state);
}
// receive data inserted in components
callbackFunction(data) {
  this.setState({data:data});
  this.sendData();
}

changeHandler = (e) => {
  this.state.data[e.target.name]=e.target.value;
  this.sendData();
}

  render() {
    return (
      <div className="container">

        {
          this.state.allowSave ? <Card><Card.Header>
            <Card.Title as="h5">{this.state.commodity.name}</Card.Title>
          </Card.Header>
          </Card>
            : null
        }
        <div><BeatLoader
          css={override}
          size={10}
          color={"#4893e9"}
          loading={this.state.loading} /></div>
        {this.state.listcommoditie_ff.length > 0 ?
          (
            <Card>

              {
                this.state.listcommoditie_ff.map((data, i) => {
                  //TODO:// type: builtin // loadfrom folder path
                  if (data && data.ebit_ff && data.ebit_ff.type === "form")
                    return <RenderComponentForm key={data.ebit_ff.id} name={data.ebit_ff.name} 
                            changeHandler={(e) => {this.changeHandler(e)}}
                            parentCallback={this.callbackFunction.bind(this)}
                            />
                  else if (data && data.ebit_ff && data.ebit_ff.type === "list")
                    return <RenderComponentList key={data.ebit_ff.id} name={data.ebit_ff.name}
                            parentCallback={this.callbackFunction.bind(this)}
                            /> 
                  else if (data && data.ebit_ff && data.ebit_ff.type === "built-in"){
                    var toRender = null;
                    switch(data.ebit_ff.loadFrom){
                      case 'Pagamento':
                        toRender = <Pagamento key={data.ebit_ff.id} name={data.ebit_ff.name} 
                                    changeHandler={(e) => {this.changeHandler(e)}}
                                    parentCallback={this.callbackFunction.bind(this)}
                                    />;
                        break;
                    
                    }
                    return toRender;
                  }
                    
                })
              }

            </Card>
          ) :
          (
            <div colSpan={3}></div>
          )
        }
        {/* {
          this.state.allowSave ? <Card>
            <Card.Body>
              <Button className="button-right" variant="outline-primary" onClick={this.submitHandler} >
                Executar acção
                </Button>
            </Card.Body>
          </Card> : null
        } */}
      </div>

    );
  }
}

export default RenderPage;

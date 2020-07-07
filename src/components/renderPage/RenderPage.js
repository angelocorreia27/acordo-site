import React from 'react';
import { Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import Components from "./Components.js";
import axiosHelper from '../helper/axiosHelper';
import authHelper from '../helper/authHelper';
import RenderComponent from './RenderComponent';
import BeatLoader from "react-spinners/BeatLoader";
import * as env from '../../env';
import { css } from "@emotion/core";
import { Base64 } from 'js-base64';

const override = css`
  display: block;
  margin: 0 px;
  margin-left:25%;
  border-color: rgb(7, 172, 238);
`;


let ffComponent = [];

class RenderPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      listcommoditie_ff:[]
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

    const userId = 1;
    console.log('commoditieId:: ', this.props.commoditieId);
    const result = await axiosHelper.axiosGet(env.dataBaseEndPoint + '/commoditie_ff/list/' + this.props.commoditieId, paramHeaders);
    console.log('result:: ', result);
    if (result && result.ebit_commoditie_ffs)
      this.setState({listcommoditie_ff:result.ebit_commoditie_ffs, loading:false});

    // TODO => Create a handle submit to save in data/store entire form
    /* 1. post to /data/store
         json body: {commoditieId:
                     ffId:}

       2. post to /data/storeData to store entire json from page rendered
       json body: {}
    */

  }

  render() {
    {
      // loop trhouth data and render all component from commoditie
    }
    return (
      <>
        {!this.state.listcommoditie_ff[0] && <div><BeatLoader
          css={override}
          size={10}
          color={"#4893e9"}
          loading={this.state.loading} /></div>}
        {this.state.listcommoditie_ff.length > 0 ?
          (
            <Card>
              {/* <Card.Header>
          <Card.Title as="h5">{this.props.commodityName}</Card.Title>
              </Card.Header> */}
              {
                this.state.listcommoditie_ff.map((data, i) => {
                  if (data && data.ebit_ff)
                    return <RenderComponent key={data.ebit_ff.id} name={data.ebit_ff.name}> </RenderComponent>
                })
              }

            </Card>
          ) :
          (
            <div colSpan={3}></div>
          )
        }
      </>

    );
  }
}

export default RenderPage;

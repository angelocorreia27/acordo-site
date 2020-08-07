import React from 'react';
import Table  from '../../pages/Table';

import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/core";
import { Base64 } from 'js-base64';
import authHelper from '../helper/authHelper';
import axiosHelper from '../helper/axiosHelper';
import * as env from '../../env';
import UtilHelper from '../helper/UtilHelper';
const override = css`
  display: block;
  margin: 0 px;
  margin-left:25%;
  border-color: rgb(7, 172, 238);
`;

var ff = {};

class RenderComponentList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      structure: [],
      listSegments: [],
      dataFromURL: [],
      columns:[]
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

    const result = await axiosHelper.axiosGet(env.dataBaseEndPoint + '/structure/listff/' + this.props.name, paramHeaders);
    if (result && result.ebit_ff_structures) {
      const ebit_ff_structures = result.ebit_ff_structures;
      var segments = [];
      for (var i = 0; i < ebit_ff_structures.length; i++) {
        segments.push(ebit_ff_structures[i].ebit_ff_segment);
      }
      this.setState({ structure: ebit_ff_structures, listSegments: segments, loading: false });
      segments = null;
    }

    if (this.state.structure[0] && this.state.structure[0].ebit_ff)
      ff = this.state.structure[0].ebit_ff;
    
    if (ff && ff.loadFrom) {
      const resultFromURL = await this.loader(paramHeaders, ff.loadFrom);
      this.setState({ dataFromURL: resultFromURL });
    }

    // Create Header and acessor element
    var headerObject = []
    for(var i=0;i<this.state.listSegments.length;i++){
      var obj = {};
      obj.Header= UtilHelper.initCatp(this.state.listSegments[i].name);
      obj.accessor= this.state.listSegments[i].name;

      headerObject.push(obj);
    }
    console.log('headerObject:: ', headerObject);

    var mainHeaderObject={};
    mainHeaderObject.Header=UtilHelper.initCatp(ff.name);
    mainHeaderObject.columns= headerObject;
    const columns = [mainHeaderObject];
    this.setState({ columns });

    console.log('ff:: ', this.state);

  }

  async loader(header, ffLoadFrom) {
    return await axiosHelper.axiosGet(ffLoadFrom, header);
  }

  
// https://github.com/learnwithparam/logrocket-smart-table
// Include filter
  
  render() {

    return (
      <>
        <Table columns={this.state.columns} data={this.state.dataFromURL} />
      </>
    );
  }
}

export default RenderComponentList;

import React from "react";
import ViewerEditor from './ViewerEditor';
import axiosHelper from '../helper/axiosHelper';
import * as env from '../../env';
import { Base64 } from 'js-base64';

const queryString = require('query-string');

function getDocumentContent () {

 /* const pathurl = window.location.search;
    
  const param = queryString.parse(Base64.decode(pathurl));

  let negotiationId= param.negotiationId

  const paramHeaders = {headers: {'Accept': 'application/json',
  'Content-type': 'multipart/form-data'}
, withCredentials: true}

    const url = env.httpProtocol
    +env.serverHost
    +':'+env.serverPort
    +'/negotiation/lastVersion/'+negotiationId;
    try {
    
    this.setState({body: Base64.decode(pathurl)});

console.log("teste", param);
   // let lastVersion = await axiosHelper.axiosGet(url,null, paramHeaders);
   
    //console.log('lastVersion ', lastVersion);

      } catch (err) {
        console.log(err);
      }
   

    */
}
    let negotiationId = null
class index extends React.Component {

    constructor(props){
      super(props);

      const pathurl = window.location.search;
      console.log("pathurl", pathurl);

      const strParam = queryString.parse(pathurl);
      console.log("strParam", strParam);
      let param= queryString.parse(Base64.decode(strParam.r))

      negotiationId = param.negotationId
      console.log("param", param);
  

      console.log("teste", negotiationId);

    }  

    componentDidMount(){
      

    }
    render() {
     
  
      return (
      
       <ViewerEditor negotiationId={negotiationId}>
          
        </ViewerEditor>
      )
    }
  }
    

export default index;
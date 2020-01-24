import React from "react";
import ViewerEditor from './ViewerEditor';
import axiosHelper from '../helper/axiosHelper';
import * as env from '../../env';

async function getDocumentContent (negotiationId) {

  const paramHeaders = {headers: {'Accept': 'application/json',
  'Content-type': 'multipart/form-data'}
, withCredentials: true}

    const url = env.httpProtocol
    +env.serverHost
    +':'+env.serverPort
    +'/negotiation/lastVersion/'+negotiationId;
    try {
    let lastVersion = await axiosHelper.axiosGet(url,null, paramHeaders);

    console.log('lastVersion ', lastVersion);


      } catch (err) {
        console.log(err);
      }
    }


class index extends React.Component {

    constructor(props){
      super(props);

    }  

    componentDidMount(){
      
      getDocumentContent();

    }
    render() {
     
  
      return (
        <ViewerEditor body="teste">
          
        </ViewerEditor>
      );
    }
  }
    

export default index;
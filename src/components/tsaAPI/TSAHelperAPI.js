import axiosHelper from '../helper/axiosHelper';
import * as env from '../../env';

  export default {
  
    async getTSAData(id){

      const paramHeaders = {headers: {'Accept': 'application/json',
      //'Content-type': 'multipart/form-data'
      },
        withCredentials: true}
    
        const url = env.httpProtocol
        +env.serverHost
        +':'+env.serverPort
        +'/tsa/' + id;
      
      return await axiosHelper.axiosGet(url,paramHeaders);

  }
  
  }
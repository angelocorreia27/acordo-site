import { Base64 } from 'js-base64';
const queryString = require('query-string');

  export default {
  
    base64ParamDecode(){

      const pathurl = window.location.search;
      let param= null
      
      try{
        const strParam = queryString.parse(pathurl);
        param= queryString.parse(Base64.decode(strParam.r))
      }catch{

      }
      
      return param;

  },

  base64ParamEncode(pathUrl){

    let strEncode= Base64.encode(pathUrl)

    return strEncode;

}
  
  }
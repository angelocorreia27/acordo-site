import Cookies from 'js-cookie'
import * as env from '../../env';
import history from '../../pages/history';
import axiosHelper from './axiosHelper';

export default {

  Auth(){
    
    // Store value in sessionStore
    
    //setStore(key, value);
    const sessPerson = Cookies.get(env.CookieSessName);
    if(!sessPerson){
      window.location.replace(env.httpProtocol
                              +env.serverHost + ':'
                              +env.serverPort
                              +env.serverAuth);
    } 

  },
  async getHeaderToken(){
     const url = env.httpProtocol +env.serverHost + ':' +env.serverPort +env.serverAuth + '/accessToken';
     const data = {};
     const paramHeaders = {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
      , withCredentials: true
    }

    try{

     const result = await axiosHelper.axiosPost(url, data ,paramHeaders);
     if (result && result.access_token )
      return result.access_token;

    }catch(err){
      console.log('error auth helper: ', err.stack);
      this.Auth();
    }

  },
  // value suposed to be an object
  SetStore(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },

  GetStore(key){
    return JSON.parse(sessionStorage.getItem(key));
  },
  DeleteStore(key){
    sessionStorage.removeItem(key);
  },

  RequiredAuth(originPath){
    this.SetStore ('originPath', originPath);
  },

  // if is setted originPath 
  //and is diferent from current path, then history.push

  BackToHistory(){
    const historyPath = this.GetStore('originPath');
    console.log('historyPath', historyPath);
    const currentPath = window.location.pathname;
    console.log('currentPath ', currentPath);
    if (historyPath && (historyPath !==currentPath)){
      this.DeleteStore('originPath')
      history.push(historyPath);
    }
  }
}
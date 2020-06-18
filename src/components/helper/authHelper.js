import Cookies from 'js-cookie'
import * as env from '../../env';
import history from '../../pages/history';

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
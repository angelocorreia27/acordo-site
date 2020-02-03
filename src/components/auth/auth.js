import React, {Component} from 'react'
import Cookies from 'js-cookie'
import { cpus } from 'os';
import axiosHelper from '../helper/axiosHelper';
import * as env from '../../env';
// isto deve ser chamado somente para acções que requerem login


class Auth extends Component {
    constructor( props ){
        super(props);
        this.state = {
            email: Cookies.get("sessPerson")
        };

      }
  
      componentDidMount() {
        var session = Cookies.get('sessPerson');
        try {
        if (session != "undefined" && session != null) {
        console.log('session', session);
        localStorage.setItem('UserSession', session);
        }
        } catch (e) {
        
        return JSON.stringify();
        }
        }
        
        async removeCookies(){
        Cookies.remove('sessPerson');
        }
        
        render() {
        var URL1 = env.httpProtocol + env.serverHost + ':' + env.serverPort + env.serverAuth ;
        var URL = "http://localhost:8000/auth/logout"
        var username = localStorage.getItem('UserSession')
        if (username != "undefined" && username != null) {
        return (<div>
        <h6>Bem-Vindo {username} <a></a><a href={URL} /*onClick={this.removeCookies()}*/>Sair</a></h6>
        </div>);
        }
        return (
        <div>
        <h6> <a href={URL1}>Login</a> </h6>
        </div >);
        }
        
    }

export default Auth;
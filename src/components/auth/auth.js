import React, {Component} from 'react'
import Cookies from 'js-cookie'
import { cpus } from 'os';
import axiosHelper from '../helper/axiosHelper';
import * as env from '../../env';
import { Link } from 'react-router-dom';
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
        
             
        render() {
        var URL1 = env.httpProtocol + env.serverHost + ':' + env.serverPort + env.serverAuth;
        var URL = env.httpProtocol + env.serverHost + ':' + env.serverPort + env.serverAuth + '/logout';
        var username = localStorage.getItem('UserSession')
        console.log(username);
        if (username != "undefined" && username != null){
        return (<div className="Sessao-user">
      <Link>Bem-Vindo {username}</Link>
        </div>);
        }else
        return (<div>
        <h6> <a href={URL1}> <h6>Bem-Vindo {username} <a></a><a href={URL} /*onClick={this.removeCookies()}*/></a></h6></a> </h6>
        </div >);
        }
        }

export default Auth;
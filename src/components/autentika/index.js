import React, { Component } from 'react';
import Aux from "../../hoc/_Aux";
import {Button} from 'react-bootstrap';
import config from './config';
import ClientOAuth2 from 'client-oauth2';
import axios from 'axios';
import { Icon } from 'antd';
import Redirect from '../helper/Redirect';

//var token;
//var storeNewToken;
var autentikaAuth = null;
var http = require("http");
var port = 3000;
var url = config.authorizationUri + '?response_type=code&client_id=' 
    + config.client_id + '&scope=openid+email+profile' 
    + '&state=YOUR_STATE&redirect_uri='+config.redirect_url;

class Auth extends Component {

        constructor(props){
        super(props);
        this.state={
          email:'',
          token:''
        }
  //this.login();
  // this.createToken();
  // this.getToken();
  // this.postToken();
  // this.getOpenToken();

    }
    
    
login = () => {
    
    var url = config.authorizationUri + '?response_type=code&client_id=' 
    + config.client_id + '&scope=openid+email+profile' 
    + config.redirect_url + '&state=YOUR_STATE&redirect_uri=';

        http.createServer(function (res, req) {
        res.rawHeaders(301,{ "Location" : url});
        res.end();
      
    }).listen(port);
      console.log();
    }

    instance = () =>{
        autentikaAuth= new ClientOAuth2({
                    clientId: config.ClientOAuth2,
                    clientSecret: config.clientSecret,
                    accessTokenUri: config.accessToken,
                    authorizationUri: config.authorizationUri,
                    redirectUri: config.redirectUri,
                    scopes: config.scopes
        
                })}

    createToken = ()  =>{
        // Can also just pass the raw `data` object in place of an argument.
        axios({
        method: 'POST',
        url: 'https://autentika.gov.cv/oauth2/token',
        headers: {
        'Authorization': 'Basic OGtqNVpETDU5RUxESUJzRkh3bFNKNDhKZzh3YTpNQ1F2MUh2VEY5RmVUX1FZMnJSZXpwY1V6SGNh',
        'Content-Type': 'application/x-www-form-urlencoded'
      }}).then(Response =>{
        console.log(Response);});
    
    }

    getToken = () =>{
        // Can also just pass the raw `data` object in place of an argument.
            axios({
            method: 'GET',
            url: 'https://autentika.gov.cv/oauth2/token',
            headers: {
                'Authorization': 'Basic OGtqNVpETDU5RUxESUJzRkh3bFNKNDhKZzh3YTpNQ1F2MUh2VEY5RmVUX1FZMnJSZXpwY1V6SGNh',
                'Content-Type': 'application/x-www-form-urlencoded'
              }}).then(Response =>{
                console.log(Response);});
              }        

        postToken = () =>{
            // Can also just pass the raw `data` object in place of an argument.
                axios({
                method: 'POST',
                url: 'https://autentika.gov.cv/oauth2/authorize',
                headers: {
                    'Authorization': 'Basic OGtqNVpETDU5RUxESUJzRkh3bFNKNDhKZzh3YTpNQ1F2MUh2VEY5RmVUX1FZMnJSZXpwY1V6SGNh',
                    'Content-Type': 'application/x-www-form-urlencoded'
                  }}).then(Response =>{
                    console.log(Response);});
                
            }

            getOpenToken = () =>{
                // Can also just pass the raw `data` object in place of an argument.
                    axios({
                    method: 'GET',
                    url: 'https://autentika.gov.cv/oauth2/userinfo?schema=openid',
                    headers: {
                        'Authorization': 'Basic OGtqNVpETDU5RUxESUJzRkh3bFNKNDhKZzh3YTpNQ1F2MUh2VEY5RmVUX1FZMnJSZXpwY1V6SGNh',
                        'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(Response =>{
                        console.log(Response);});
                       
                    }
            
    render() {

        return (
            <Aux>

                <Redirect loc={url} />
               
            </Aux>
        );
    }
}

export default Auth;
//  http://localhost:3000/auth/login?code=67bf2348-93e6-34ae-a6d3-63c321596ea2&state=YOUR_STATE&session_state=c0bb2a60e86f9be9a5fab759e7654b6d435dc9bd7c42cad695f8190b6f3143a4.YdeyiyrbjfHnWZuqzuqAvA
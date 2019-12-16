import React, { Component } from 'react';
import Aux from "../../hoc/_Aux";
import {Button} from 'react-bootstrap';
import config from './config';
import ClientOAuth2 from 'client-oauth2';
import axios from 'axios';
import { Icon } from 'antd';


//var token;
//var storeNewToken;
var autentikaAuth = null;

var http = require("http");
var port = 3000;

class Auth extends Component {

        constructor(props){
        super(props);
        this.state={
          email:'',
          token:''
        }
  this.login();
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
               
                <p>teste</p>
         
            </Aux>
        );
    }
}

export default Auth;

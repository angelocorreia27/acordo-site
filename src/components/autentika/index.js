import React, { Component } from 'react';
import Aux from "../../hoc/_Aux";

import config from './config';
import ClientOAuth2 from 'client-oauth2';
import axios from 'axios';


var token;
var storeNewToken;
var autentikaAuth = null;


class Auth extends Component {

    
    constructor(props){
        super(props);
        this.state={
          email:'',
          token:''
        }
    }
    instance = () =>{    
        autentikaAuth = new ClientOAuth2({

            clientId: config.ClientOAuth2,
            clientSecret: config.clientSecret,
            accessTokenUri: config.accessToken,
            authorizationUri: config.authorizationUri,
            redirectUri: config.redirectUri,
            scopes: config.scopes

             });
         this.getToken();
       

    }

    createToken = ()  =>{
        // Can also just pass the raw `data` object in place of an argument.
        axios({
        method: 'get',
        url: 'https://autentika.gov.cv/oauth2/token'
        });//=> { method, url, headers, ... }
        console.log(this.createToken);
    }

    getToken = () =>{
        // Can also just pass the raw `data` object in place of an argument.
            axios({
            method: 'get',
            url: 'https://autentika.gov.cv/oauth2/token'
            }); //=> { method, url, headers, ... }
          console.log(this.getToken);
        }

        postToken = () =>{
            // Can also just pass the raw `data` object in place of an argument.
                axios({
                method: 'post',
                url: 'https://autentika.gov.cv/oauth2/authorize'
                });//=> { method, url, headers, ... }
                console.log(this.postToken);
            }

            getOpenToken = () =>{
                // Can also just pass the raw `data` object in place of an argument.
                    axios({
                    method: 'get',
                    url: 'https://autentika.gov.cv/oauth2/userinfo?schema=openid '
                    });//=> { method, url, headers, ... }
                  
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

import React, { Component } from 'react';
import Aux from "../../hoc/_Aux";

import config from './config';
import ClientOAuth2 from 'client-oauth2';

var githubAuth = null;
var token;
var storeNewToken;

class Auth extends Component {

    
    constructor(props){
        super(props);
        this.state={
          email:'',
          token:''
        }
        
    }
    instance = () =>{
        githubAuth = new ClientOAuth2({
            clientId: config.ClientOAuth2,
            clientSecret: config.clientSecret,
            accessTokenUri: config.accessToken,
            authorizationUri: config.authorizationUri,
            redirectUri: config.redirectUri,
            scopes: config.scopes
        });
    }
   
    createToken = ()  =>{
        // Can also just pass the raw `data` object in place of an argument.
        token = githubAuth.createToken('access token', 'optional refresh token', 'optional token type', { data: 'raw user data' })
        
        // Set the token TTL.
        token.expiresIn(1234) // Seconds.
        token.expiresIn(new Date('2016-11-08')) // Date.
        
        // Refresh the users credentials and save the new access token and info.
        token.refresh().then(storeNewToken)
        
        // Sign a standard HTTP request object, updating the URL with the access token
        // or adding authorization headers, depending on token type.
        token.sign({
        method: 'get',
        url: 'https://api.github.com/users'
        }) //=> { method, url, headers, ... }

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

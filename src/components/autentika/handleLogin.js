import React, { Component } from 'react';
import Aux from "../../hoc/_Aux";
import {Button} from 'react-bootstrap';
import config from './config';
import axios from 'axios';
import { Icon } from 'antd';
import Redirect from '../helper/Redirect';
import queryString from 'query-string';


var url = config.authorizationUri + '?response_type=code&client_id=' 
    + config.client_id + '&scope=openid+email+profile' 
    + '&state=YOUR_STATE&redirect_uri='+config.redirect_url;

let params = {};

class handleLogin extends Component {

        constructor(props){
        super();
        this.state={
          code:null,
          session_state:null,
          state:null
        }
  //this.login();
  // this.createToken();
  // this.getToken();
  // this.postToken();
  // this.getOpenToken();

    }
    
    componentDidMount () {

      let url = this.props.location.search;
      params = queryString.parse(url);
      this.state.code = params.code;
      this.state.session_state = params.session_state;
      this.state.state = params.state;
      console.log("state", this.state);
    }

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

export default handleLogin;
//    http://localhost:3000/auth/login?code=67bf2348-93e6-34ae-a6d3-63c321596ea2&state=YOUR_STATE&session_state=c0bb2a60e86f9be9a5fab759e7654b6d435dc9bd7c42cad695f8190b6f3143a4.YdeyiyrbjfHnWZuqzuqAvA
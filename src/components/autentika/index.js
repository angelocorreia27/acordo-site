import React, { Component } from 'react';
import Aux from "../../hoc/_Aux";
import config from './config';
import Redirect from '../helper/Redirect';
import queryString from 'query-string';


var url = config.authorizationUri + '?response_type=code&client_id=' 
    + config.client_id + '&scope=openid+email+profile' 
    + '&state=YOUR_STATE&redirect_uri='+config.redirect_url;

    class Auth extends Component {
         
    render() {
          return (
              <Aux>
                    <Redirect loc={url} />
              </Aux>
          );
       }
    
}

export default Auth;

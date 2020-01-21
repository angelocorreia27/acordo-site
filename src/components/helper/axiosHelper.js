import * as env from '../../env';
import axios from 'axios';

  export default {
  
    axiosGet (url, bodyOption,HeaderOptions ){

    return axios.get(url,{
      withCredentials: true
    })
      .then(response => {
        console.log('response ', response.data);
                                    
        return response.data; 
      })
      .catch(error => {
        console.log('get error text', error);
        console.log('get error response', error.response.data);
          // redirect to login if user doesn't have session
          if(error.response.status ==401)
            window.location.replace(env.httpProtocol
              +env.serverHost + ':'
              +env.serverPort
              +env.serverAuth);

      });
  },

  axiosPost (url, bodyOption,HeaderOptions ) {

        return axios.post(url,bodyOption,HeaderOptions)
          .then(response => {
            console.log('response ', response.data);                          
            return response.data; 
          })
          .catch(error => {
              console.log('post error text', error);
              console.log('post error response', error.response.data);
              // redirect to login if user doesn't have session
              /*
              if(error.response.status ==401)
                window.location.replace(env.httpProtocol
                  +env.serverHost + ':'
                  +env.serverPort
                  +env.serverAuth);
              */
          });
    }
  
  }
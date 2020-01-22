import * as env from '../../env';
import axios from 'axios';

  export default {
  
    async axiosGet (url, bodyOption,HeaderOptions ){

    return await axios.get(url,HeaderOptions)
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

  async axiosPost (url, bodyOption,HeaderOptions ) {

        return await axios.post(url,bodyOption,HeaderOptions
          )
          .then(response => {
            return response.data; 
          })
          .catch(error => {
              console.log('post error text', error);
              console.log('post error response', error.response);
              // redirect to login if user doesn't have session
              
              if(error.response.status ==401)
                window.location.replace(env.httpProtocol
                  +env.serverHost + ':'
                  +env.serverPort
                  +env.serverAuth);
              
              
          });
    }
  
  }
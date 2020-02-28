import * as env from '../../env';
import axios from 'axios';

  export default {
  
    async axiosGet (url,HeaderOptions ){

    return await axios.get(url,HeaderOptions)
      .then(response => {
        console.log('response ', response.data);
                                    
        return response.data; 
      })
      .catch(error => {
        console.log('get error text', error);
          // redirect to login if user doesn't have session
          if(error.response && error.response.status ==401)
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
              // redirect to login if user doesn't have session
              
              if(error.response && error.response.status ==401)
                window.location.replace(env.httpProtocol
                  +env.serverHost + ':'
                  +env.serverPort
                  +env.serverAuth);
              
              
          });
    }
  
  }
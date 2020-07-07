import * as env from '../../env';
import axios from 'axios';

  export default {
  
    async axiosGet (url,HeaderOptions ){

    return await axios.get(url,HeaderOptions)
      .then(response => {                                    
        return response.data; 
      })
      .catch(error => {
          // redirect to login if user doesn't have session
          //console.log('response status: ', error.response.data)
          if(error.response && error.response.status ===401)
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
              // redirect to login if user doesn't have session
              //  console.log('response status: ', error.response.data)
               if(error.response && error.response.status ===401)
                window.location.replace(env.httpProtocol
                  +env.serverHost + ':'
                  +env.serverPort
                  +env.serverAuth); 
              
              
          });
    }
  
  }
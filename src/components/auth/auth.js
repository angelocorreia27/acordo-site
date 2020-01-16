import React, {Component} from 'react'
import Cookies from 'js-cookie'
import { cpus } from 'os';

// isto deve ser chamado somente para acções que requerem login


class auth extends Component {
    constructor( props ){
        super(props);
        this.state = { ...props,
            email: Cookies.get('email')
        };

      }
  
    componentWillMount(){ 
    
      console.log('cookie', this.state.email);
      // Caso o cookie não estar definido, faz o redirect para o login
     // Cookies.set  ("session", session, {expires: 14}); http://localhost:8000/auth
      var session = this.state.email;
      console.log(session);

      try{
        console.log("test" + username);
         const username = Cookies.getItem('email') && this.setState({
         user: JSON.parse(Cookies.getItem('person'))
                          
      });
     
      if(username!=undefined){
       

      }
    }catch (e) {
          
           return JSON.stringify('cookies');
         }    
     
        }

        render(){
        return (
          
          <session>test...</session>         
        );
           


      }
    }

export default auth;
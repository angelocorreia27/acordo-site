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
      var session = this.state.email;
      console.log('cookie', this.state.email);
      // Caso o cookie não estar definido, faz o redirect para o login
  
      try{             
    
     
      if(session!="undefined"){
      Cookies.set  ("session", session, {expires: 14}); //http://localhost:8000/auth
     // window.location.href ("http://localhost:8000/auth");
      console.log(session);

      }else{
        window.open("http://localhost:4000/");
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
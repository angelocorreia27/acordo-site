import React, {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router'



// isto deve ser chamado somente para acções que requerem login

class auth extends Component {
    constructor( props ){
        super();
        this.state = { ...props,
            email: Cookies.get('email')
        };
        
      }
      componentWillMount(){
   
        console.log('cookie', this.state.email);
        // Caso o cookie não estar definido, faz o redirect para o login
     const session = Cookies.get("email");
    
    Cookies.set("session", session, {expires: 14});
    if (session === undefined) {
    //  this.props.history.push('/auth');

   <Redirect to ="http://localhost:8000/auth"/> // colocar a variavel num ficheiro .env e carregar
  //window.location = "http://localhost:8000/auth";
    } else {
      return JSON.parse(session);
      
    }

  };  


      render(){
        return (
               <session>teste...</session>
               
        );
           

}}

export default auth;
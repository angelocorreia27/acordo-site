import React, {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router'
import axios from "axios";
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
     // Cookies.set  ("session", session, {expires: 14});
      var session = this.state.email;

      async function cliendApp(req, res){

        try {
      
           if (!session.email) {
                        
            res.redirect('/auth');         
           }else {
             res.redirect("http://localhost:3000/");
               
           }
      }  catch (e) {
          
           return JSON.stringify('cookies');
         } 
          
      } 
}

        render(){
        return (
               <session>teste...</session>        
        );
           


      }
    }

export default auth;
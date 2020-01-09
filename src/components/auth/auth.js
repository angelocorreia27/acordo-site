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

      async function auth(req, res){
        try {
        console.log('session: '+req.session.user.userName);
        if(!req.session.user) {
            res.redirect('/auth/login');
        } else {
            res.render('account', {user: req.session.user});
        }
    }catch (e) {
          
           return JSON.stringify('cookies');
         }    
     
}}

        render(){
        return (
               <session></session>        
        );
           


      }
    }

export default auth;
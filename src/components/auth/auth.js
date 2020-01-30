import React, {Component} from 'react'
import Cookies from 'js-cookie'
import { cpus } from 'os';

// isto deve ser chamado somente para acções que requerem login


class Auth extends Component {
    constructor( props ){
        super(props);
        this.state = {
            email: Cookies.get("sessPerson")
        };

      }
  
      componentDidMount() {   
      
         if (!undefined) {
              
         return this.setState({ username: 'Bem-Vindo   ' + Cookies.get("sessPerson") })
         
     }else{
         console.log("teste", this.state.email);
     }
} 

    render() {

        return (

            <h6> Bem-Vindo {document.cookie.replace(/(?:(?:^|.*;\s*)sessPerson*\=\*([^;]*).*$)|^.*$/, "$1")}</h6>

        );

           


      }
    }

export default Auth;
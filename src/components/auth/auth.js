import React, {Component} from 'react'
import Cookies from 'js-cookie'

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

       // window.location = "http://localhost:8000/auth";  // colocar a variavel num ficheiro .env e carregar
      }

      render(){
        return (<section>Redirecting...</section>);
      }
           

}

export default auth;
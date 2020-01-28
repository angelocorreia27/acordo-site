import React, {Component} from 'react'
import Cookies from 'js-cookie'
import { cpus } from 'os';

// isto deve ser chamado somente para acções que requerem login


class auth extends Component {
    constructor( props ){
        super(props);
        this.state = { ...props,
            
        };

      }        

        render(){
        return (
          
          <session>Voce efecuou o logout com sucesso</session>   
             
        );
           


      }
    }

export default auth;
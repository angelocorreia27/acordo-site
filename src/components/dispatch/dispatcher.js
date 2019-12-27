import React, {Component} from 'react'

import axios from 'axios'
// isto deve ser chamado para todos os axios.get e axios.post
// os erros devem ser tratados aqui
// Veja exemplo de como passar dados: https://www.robinwieruch.de/react-pass-props-to-component




class dispatcher extends Component {
    constructor( props ){
        super();
        this.state = { ...props,
        };


      }

      componentWillMount(){
          // aqui criar os metodos para axio.get e axios.post
      }      
       axiosGet (){ 
        var token = sessionStorage.getItem("token");
          axios({
            method: 'GET',
            headers: new Headers({
              Authorization: 'Bearer' + sessionStorage.token
            }),
          })
            .then((response) => response.json())
            .then(data => {
              this.setState({ data: data })
              sessionStorage.setItem('token', data)
            })
          
        }
    
      axiosPost = () =>{
            // Can also just pass the raw `data` object in place of an argument.
                axios({
                method: 'POST',
                body: JSON.stringify({
                  email: 'myemail',
                  password: 'mypassword',
                  Authorization: 'myAdmin'
                }),
                headers: {'Accept' : 'application/json'}
              }).then(Response =>{
                    console.log(Response);});
                  }  

      

      // nos componentes que chamam o dispatcher efectuar o callback
      render(){
        return (
          <div>
          {this.axiosGet()}
          </div>
          );

          

      }
           

}

export default dispatcher;
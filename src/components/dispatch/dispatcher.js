import React, {Component} from 'react'

import axios from 'axios'
// isto deve ser chamado para todos os axios.get e axios.post
// os erros devem ser tratados aqui
// Veja exemplo de como passar dados: https://www.robinwieruch.de/react-pass-props-to-component




class dispatcher extends Component {
    constructor( props ){
        super();
        this.state = { ...props,
          email: Cookies.get('email')
        };

      }

      componentWillMount(){
          // aqui criar os metodos para axio.get e axios.post
          Cookies.getJSON('email') && this.setState({
            email: JSON.parse(Cookies.getJSON('email')),
            
          })
            
       axiosGet = ()=>{ 
         axios({
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer ${token}'
            },
          })
            .then((response) => response.json())
            .then(data => {
              this.setState({ data: data })
              Cookies.getJSON('email', JSON.stringify(this.props.email));
              Cookies.set('email', Date.now());
              console.log(data);
            })
          
        };
    
      axiosPost = () =>{
            // Can also just pass the raw `data` object in place of an argument.
            let data = { email: email, password: password };
            data = qs.stringify(data);
    
            axios({
                method: 'POST',
                headers: {
                  'Content-type': 'application/json',
                  'Authorization': 'Bearer ${token}'
                },
                body: JSON.stringify({
                  email: '',
                  password: ''                 
                }),
                headers: {'Accept' : 'application/json'}
              }).then(Response =>{
                    console.log(Response);});
                  }  

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
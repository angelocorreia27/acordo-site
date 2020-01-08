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
            this.axiosGet();
            this.axiosPost();
      }    
       axiosGet = (headers, body)=>{ 
        try{
           axios({
            method: 'GET',
            headers: headers,
            body: body
          
          })
            .then((response) => response.json())
            .then(data => {
              this.setState({ data: data })
              Cookies.getJSON('email', JSON.stringify(this.props.email));
              console.log(data);
            });
          }catch (err) {
            debug(err)
          }
        };
    
      axiosPost = (headers, body) =>{
            // Can also just pass the raw `data` object in place of an argument.
            let data = { email: email, password: password };
            data = qs.stringify(data);
            try {
                axios({
                method: 'POST',
                headers: headers,
                body: body                 
              
              }).then(Response =>{
                    console.log(Response.data);
                
                   });
                
                }catch (err) {
                  debug(err)
                } 

      }

      // nos componentes que chamam o dispatcher efectuar o callback
      render(){
        return (
          <div>teste...</div>
          );
         

      }
           

}

export default dispatcher;
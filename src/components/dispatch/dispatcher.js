import React, {Component} from 'react'

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


      // nos componentes que chamam o dispatcher efectuar o callback
      render(){
        return (<section>teste...</section>);
      }
           

}

export default dispatcher;
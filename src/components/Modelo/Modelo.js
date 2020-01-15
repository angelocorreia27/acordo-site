import React, {Component} from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'

class Modelo extends Component {
      constructor(props){
          super(props);
         this.setState = {
           e: false
         }
        }
          render(){
            return(
              
 <div className="ButtonLarge">
  <ButtonToolbar>
    <Button className="ButtonLarge" href="/Editor">
        Documento
    </Button>
    <Button className="ButtonLarge" href= "https://www.pandadoc.com/agreement-templates/">
      Contrato
    </Button>
  </ButtonToolbar>
</div>
        
            )
          }
          
      

}export default Modelo;
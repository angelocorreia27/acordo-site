import React, {Component} from 'react'
import {Modal,Button} from 'react-bootstrap'

class AddModal extends Component {
      constructor(props){
          super(props);
         this.setState = {
           e: false
         }
        }
          render(){
            return(
              <Modal>
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Adicionar mensagem privada
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
        
            )
          }
          
      

}export default AddModal;
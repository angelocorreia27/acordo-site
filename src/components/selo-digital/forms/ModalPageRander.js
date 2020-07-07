import React, { Fragment, Button } from 'react';
import Modal from 'react-bootstrap/Modal'
import RenderPage from '../../renderPage/RenderPage';

class ModalPageRander extends React.Component {
    constructor(props) {
        super(props)

    }
  modelLoad(){

    console.log('load');
  }
  render() {
  
    return (
      <>
 
        <Modal
        show={this.props.showModal}
        onHide={this.props.hideModal}
        onEntered={this.modalLoaded}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Visualização do API {this.props.commodityName}
          </Modal.Title>
        </Modal.Header>
        <RenderPage commoditieId={this.props.commoditieId} commodityName={this.props.commodityName}/>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
}
export default ModalPageRander;
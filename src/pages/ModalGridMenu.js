import React from 'react';
import Modal from 'react-bootstrap/Modal'
import GridMenu from './GridMenu';

class ModalGridMenu extends React.Component {
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
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered={false}
      >
        <GridMenu/>
      </Modal>
      </>
    );
  }
}
export default ModalGridMenu;
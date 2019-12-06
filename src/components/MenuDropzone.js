import React from 'react'
import Dropzone from 'react-dropzone'
import {Button} from 'react-bootstrap'
import AddModal from './AddModal';

class MenuDropzone extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        FileURL: ''
      }
   this.onClickHandler = this.onClickHandler.bind(this);
  }
    MyDropzone = (files, rejectedFiles) => {
      console.log(files);
      
    
  }

  onClickHandler (){

   
}
render(){
  return (
    <center>
    <div className="sub-hearder">
      <br></br><br></br><br></br><br></br>
      <h3>Largue documentos aqui para comecar</h3>
      <Dropzone onDrop={this.onClickHandler}><br></br><br></br><Button className="warning">INICIAR AGORA</Button>
 
      </Dropzone>
    </div>
    </center>
  )}

}

export default MenuDropzone;

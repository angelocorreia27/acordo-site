import React from 'react';
import Dropzone from 'react-dropzone';
import {Button} from 'react-bootstrap';
import AddModal from './AddModal';
import axios from 'axios';

class MenuDropzone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }
 
   this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile);
    axios.post("http://localhost:8000/negotiation/create", data, { 
       // receive two    parameter endpoint url ,form data
  "owner":"angelo",
  "title":"angelo",
  "description":"title",
  "initialData": "ficheiro"
   })
 
 .then(res => { // then print response status
     console.log(res.statusText);
  })
 }

  

render(){
  return (
    <center>
    <div className="sub-hearder">
      <br></br><br></br><br></br>
     <Dropzone onDrop={this.onClickHandler}><br></br><br></br>
 
     <Button className="warning">INICIAR AGORA</Button>
      <p>Largue documentos aqui 
       para comecar</p>
      </Dropzone>
    </div>
    </center>
  )}

}

export default MenuDropzone;


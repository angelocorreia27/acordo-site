import React from 'react'
import Dropzone from 'react-dropzone'

class MenuDropzone extends React.Component {
 
    MyDropzone = (files, rejectedFiles) => {
      console.log(files);
      
    
  }
render(){
  return (
    <center>
    <div className="Posicion-File">
      <h2>Largue documentos aqui para comecar</h2>
      <Dropzone onDrop={this.MyDropzone}><button>INICIAR AGORA</button></Dropzone>
    </div>
    </center>
  )}

}

export default MenuDropzone;

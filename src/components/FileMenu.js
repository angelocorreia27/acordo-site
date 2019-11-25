import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone'
import request from "superagent";
import {API} from "../config/environment"


//module.exports = require("./dropzone");
//const acceptedFileTypes = 'application/docx'

class FileMenu extends Component {
      constructor(props){
        super(props)
      }

      
 onDrop = (files) => {
  const req = request.post(`${API.development}/generateSync`);

};



  render () {
      
    return (
 
  <div>
         <center> <Link to="FileDrop">Iniciar agora</Link>
      <div>
                <Dropzone accept="application/pdf" onDrop={this.onDrop} style={baseStyle}>
                          
                </Dropzone>
       </div>
                </center>
                </div>
 
          )
  }

      
}
const baseStyle = {
  width: "80%",
  height: 120,
  padding: 30,
  borderWidth: 2,
  borderColor: '#666',
  borderStyle: 'dashed',
  borderRadius: 5
  };
  

export default FileMenu;
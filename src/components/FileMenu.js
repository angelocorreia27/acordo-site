import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import Dropzone from 'react-dropzone'
import request from "superagent";
import {API} from "../config/environment"
import {rxLoadFile, rxPushArrangement, rxPushResetArrangement} from "../store/actions/FileActions";
import classNames from 'classnames';
//module.exports = require("./dropzone");
//const acceptedFileTypes = 'application/docx'



class FileMenu extends Component {
      constructor(props){
        super(props)
       
      }



  render () {
    
    return (

  <div>
       <center> <Link to="FileDrop">Iniciar agora</Link>
      
                <Dropzone accept='document/docx' onDrop={this.handledrop} multiple={false}   style={baseStyle}/>          
    
       
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
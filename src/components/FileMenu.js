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

      
 onDrop = (files) => {
  const req = request.post(`${API.development}/generateSync`);

  this.props.rxPushResetArrangement();
  this.props.rxLoadFile({ fileResponse: null, isFileLoading: true });

  req.attach("pdf_file", files[0])
      .on('error', (err) => {
          this.props.rxLoadFile({ fileResponse: {}, isFileLoading: null, isFileError: true })
      })
      .then(res => {
          this.props.rxLoadFile({ fileResponse: res.body, isFileLoading: false })
      });
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
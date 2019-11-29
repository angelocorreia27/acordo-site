import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone'
import request from "superagent";
import {API} from "../config/environment"
import {Progress} from 'reactstrap';

class FileMenu extends Component {
      constructor(props){
             super(props);
            this.state = {

                selectedFileUri : null
            }
      }

verifyFile = (files) => {
    if(files && files.lenght > 0){
        const selectedFileUri = files[0]
        const currentFileType = selectedFileUri.type
    }

}

 handleonDrop = (files, rejectedFiles) => {
    console.log(files)

    files.map(file => {
        this.setState({
            selectedFileUri : URL.createObjectURL(file)
        })
    });


    if(rejectedFiles && rejectedFiles.lenght > 0) {
        this.verifyle(rejectedFiles)
    }
  if(files && files.lenght > 0) {
    const isVerifyFile = this.verifyFile(files)
   if(isVerifyFile){
        const selectedFileUri = files[0]
        const myFileReader = new FileReader()
        myFileReader.addEventListener("load", ()=>{
        console.log(myFileReader.result)
        this.setState({
            imgSrc: myFileReader.result

        })
    }, false)
   
    myFileReader.readAsDataURL(selectedFileUri)
}

}

}

onChangeHandler=event=>{
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

  onClickHandler = () => {
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
}

applyMimeTypes (event) {
    this.setState({
      accept: event.target.value
    })
  }

render () {
      const {selectedFileUri} = this.state
    return (
 <div>
     <center>
    
         <Link to="Editor">Iniciar agora</Link>
                <Dropzone accept="application/pdf" onDrop={this.handleonDrop.bind(this)} onClickHandler={this.onClickHandler} applyMimeTypes={this.applyMimeTypes.bind(this)}  style={baseStyle}>
                    Drop your file hear...
            
            <div>
            {selectedFileUri}
            <img src={selectedFileUri} all="Preview of Upload Image "/>
            </div>

            </Dropzone>
       
        
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

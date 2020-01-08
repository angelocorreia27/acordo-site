import React from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import {Icon, message, Upload} from 'antd'
import uuid from 'uuid/v4'

let data = new FormData()

const props = {
  name: 'file',
  action: 'http://localhost:8000/negotiation/upload',
  body: data,
  headers: {
        authorization: 'multipart/form-data',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class MenuDropzone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loading: false,
      personInfo: {
        id: ''

      },
      negotiation:{
        id:uuid()
      }
    }
    
 this.submitUpload = this.submitUpload.bind(this);
 // this.viewData = this.viewData.bind(this);
}

submitUpload= () => { 
  const urlCreate = "http://localhost:8000/negotiation/create";
  const urlUpload = "http://localhost:8000/negotiation/upload";


  const paramHeaders = {hearders: {'Content-type': 'application/json'}}
  const uploadHeaders = {hearders: {'Content-type': 'multipart/form-data'}}

  const paramBodyCreate = {
     id: this.state.negotiation.id,
     owner: uuid(), // id do utilizador em sessao
     title:"title",
     docType: "text",
     description:"description"
   }
  
  const paramBodyUpload = {
   id: this.state.negotiation.id,
   dataType: 'file'
  }   
   
   axios.post(urlCreate, paramBodyCreate, paramHeaders).then(function(res){
    console.log(res.statusText); })   
   
  // axios.post(urlUpload, paramBodyUpload, uploadHeaders, data).then(res => { // then print response status  console.log(res.statusText); })
      
}

 render(){
  const upload = (
    <div>
 
        <div className="ant-upload-text">Largue os seus ficheiros aqui</div>
        <br></br><br></br>
        <Icon type={this.state.loading ? 'loading' : 'file-add'} />
 
    </div>

    
  );
    return (

    <center>
             
  <div className="sub-hearder">

<Button className="warning"  href="/Editor"> Iniciar agora </Button>

    <br></br><br></br>
    <Upload style={baseStyle} onClick={this.submitUpload}>
    
   <Button>
      <Icon type="upload" /> Click to Upload
    </Button>

      </Upload>
  </div>


    </center>
  )}

}

export default MenuDropzone;

<div style={{ marginTop: 20 }}/>


const baseStyle = {
width: "100%",
padding: 30,
borderWidth: 2,
borderColor: '#666',
borderStyle: 'dashed',
borderRadius: 5
};
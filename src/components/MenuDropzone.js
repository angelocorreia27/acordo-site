import React from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import {Icon, message, Upload} from 'antd'
import uuid from 'uuid/v4'
import {config} from "../config/env"
//let data = new FormData();

let id = uuid();
const props = {
  name: 'file',
  dataType: 'file',
  id:id,
  action: 'http://10.4.9.73:8000/negotiation/upload',
  headers: {
        'Content-Type': 'multipart/form-data',
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

const paramHeaders = {hearders: {'Content-type': 'application/json'}, withCredentials: true}
const uploadHeaders = {hearders: {'Content-type': 'multipart/form-data'}, withCredentials: true}

const paramBodyCreate = { 
  id: id,
  owner: uuid(), // id do utilizador em sessao
  title:"title",
  dataType: "text",
  description:"description"
}

// paramBodyUpload do tipo multiform-data


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
    
 //this.submitUpload = this.submitUpload.bind(this);
 this.fileCreate = this.fileCreate.bind(this);
 this.fileUpload = this.fileUpload.bind(this);

 // this.viewData = this.viewData.bind(this);
 
}

  // Post Endpoints Create
  fileCreate = () => {
    console.log("thifileCreate");
  axios.post('http://localhost:8000/negotiation/create', paramBodyCreate, paramHeaders
    ).then(function(res){
       console.log(res.statusText);

    })
//  this.fileUpload();
  } 
  // Post Endpoints Upload 
  
  fileUpload = () => {
    console.log("fileUpload");

  const data = new FormData() 
  const paramBodyUpload = 'id='+paramBodyCreate.id+'&dataType=file&file=' + this.state.selectedFile;
  data.append('file', this.state.selectedFile, this.state.selectedFile.name);
  console.log("test" + this.state.selectedFile);
  axios.post('http://localhost:8000/negotiation/upload', paramBodyUpload, uploadHeaders
    ).then(res => { // then print response status  
      console.log(res.statusText); 
      console.log(res.data);
  })
      
}

onChangeHandler=event=>{
  event.preventDefault();
  console.log(event.target.files[0])


  const data = new FormData(); 

  
  data.append('owner', id); // id do utilizador em sessao
  data.append('title', 'title');
  data.append('description', 'description');
  data.append('id', id);
  data.append('dataType', 'ficheiro');
  data.append('fileData', event.target.files[0]);


  const url = config.serverUrl+'negotiation/upload'
  console.log(url);
  axios.post(url, data, uploadHeaders
    ).then(res => { // then print response status  
      console.log(res.statusText); 
      console.log(res.data);
  })

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
   

    
   <input type="file" name="file" onChange={this.onChangeHandler}/>

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
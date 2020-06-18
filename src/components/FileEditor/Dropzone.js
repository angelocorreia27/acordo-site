import React from 'react';
import uuid from 'uuid/v4'
import * as env from '../../env';
import {useDropzone} from 'react-dropzone';
import paramHelper from '../helper/paramHelper';
import axiosHelper from '../helper/axiosHelper';

function DropzoneWithoutDrag() {
  const {getRootProps, getInputProps, acceptedFiles} = useDropzone({noDrag: true});
  const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p style= {baseStyle}>Arraste e solte alguns arquivos aqui ou clique para selecionar os arquivos</p>
        
      </div>
      <aside>
        
        <ul>{files}</ul>
      </aside>
    </section>
  );
  }
  
const uploadHeaders = {headers: {'Content-type': 'multipart/form-data'}, withCredentials: true}

class Dropzone extends React.Component {
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
}

onChangeHandler = async event=>{
  var d = new Date();
  event.preventDefault();
  console.log(event.target.files[0])

  const data = this.props.postData; 

  //data.append('owner', uuid()); // email do utilizador em sessao
  data.append('title', 'title_'+d.getTime());
  data.append('description', 'description_'+d.getTime());
  //data.append('dataType', 'file');
  data.append('fileData', event.target.files[0]);

  const url = this.props.postUrl;

  let result = await axiosHelper.axiosPost(url, data, uploadHeaders);
      
      // redirect to review with param encoded
      console.log(result);
    if (result && result.id){
      window.location.href = this.props.redirectUrl + paramHelper.base64ParamEncode('id='+result.id);
    }

}

 render(){

    return (

    <center>
             
  <div align="center">
   
   <DropzoneWithoutDrag/>
   <input type="file" name="file" onChange={this.onChangeHandler}/>


  </div>


    </center>
  )}

}

export default Dropzone;
/*{
<div style={{ marginTop: 20 }}/>

}*/
const baseStyle = {
width: "100%",
padding: 30,
borderWidth: 2,
borderColor: '#666',
borderStyle: 'dashed',
borderRadius: 5
};
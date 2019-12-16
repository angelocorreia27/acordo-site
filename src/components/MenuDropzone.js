import React from 'react';
import Dropzone from 'react-dropzone';
import {Button} from 'react-bootstrap';
import AddModal from './AddModal';
import axios from 'axios';
import {Icon, message, Upload} from 'antd'


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  
  const isLt2M = file.size / 1048576 / 1048576 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class MenuDropzone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loading: false
    }
   this.handleChange = this.handleChange.bind(this);
   this.onClickHandler = this.onClickHandler.bind(this);
  }

handleChange = info => {

  if (info.file.status === 'uploading') {
    this.setState({ loading: true });
    return;
  }
  if (info.file.status === 'done') {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, imageUrl =>
      this.setState({
        imageUrl,
        loading: false,
      }),
    );
  }

}

  onClickHandler = () => {
    const data = new FormData();
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
  const upload = (
    <div>
    <Icon type={this.state.loading ? 'loading' : 'plus'} />
    <div className="ant-upload-text">Upload File</div>      
    </div>
  );
  const {imageUrl} = this.state;
    return (
    <center>
   
    <div className="sub-hearder">

      <br></br><br></br><br></br>
   <Button href="/Modelo"> INICIAR AGORA</Button>
 <br></br><br></br><br></br>
 <br></br><br></br><br></br>
  <Upload beforeUpload={beforeUpload} onChange={this.handleChange}>
  {imageUrl ? <img src={imageUrl} style={{width: '100%' }} /> : upload}
</Upload>
   
</div>
    </center>
  )}

}

export default MenuDropzone;


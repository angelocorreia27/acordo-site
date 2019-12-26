import React from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import {Icon, Upload} from 'antd'



class MenuDropzone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loading: false
    }

   this.onClickButton = this.onClickButton.bind(this);
   this.viewData = this.viewData.bind(this);
  }

onClickButton = () => {
  //const data = new FormData() 
  //data.append('file', this.state.selectedFile);  
  axios.post("http:localhost:8000/negotiation/upload",{ 
    "id":"1",
    "fileData":"FileData"

  }).then(res => { // then print response status
         console.log(res.statusText); 
    
      })
     }

viewData = () => {
  window.open('addDoc.js', axios.post("http:localhost:8000/negotiation/upload"));
}
    

 render(){
  const upload = (
    <div>
 
  <div className="ant-upload-text">Largue os seus ficheiros aqui</div>
  <br></br><br></br>
  <Icon type={this.state.loading ? 'loading' : 'plus'} />
 
    </div>

    
  );
  const {imageUrl} = this.state;
    return (

    <center>
             
  <div className="sub-hearder">

<Button 
onClick={this.onClickButton} href="/Editor">Iniciar agora</Button>

   <br></br><br></br>
     <Upload style={baseStyle}>
    
  {imageUrl ? <img src={imageUrl} /> : upload}

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
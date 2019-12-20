import React from 'react';
import Grid from 'antd/lib/card/Grid';
import { Container, Row, Col } from 'reactstrap';
import Dropzone from 'react-dropzone';
//import { Progress, Upload, Icon } from 'antd';
//import axios from 'axios';

const Preview = ({ meta }) => {
  const { name, percent, status } = meta
  return (
    <span style={{ alignSelf: 'flex-start', margin: '10px 3%', fontFamily: 'Helvetica' }}>
      {name}, {Math.round(percent)}%, {status}
    </span>
  )
}

const CustomPreview = () => {
  const getUploadParams = () => ({ url: 'https://httpbin.org/post' })

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <Dropzone
      
      getUploadParams={getUploadParams}
      accept=".doc, docm, .docx, .potx, .ppt, .pptm" multiple=""
      onSubmit={handleSubmit}
      PreviewComponent={Preview}
      inputContent="Large os seus ficheiros aqui"
      disabled={files => files.some(f => ['preparing', 'getting_upload_params', 'uploading'].includes(f.meta.status))}
      style={baseStyle}

    />
  )
}


class addDoc extends React.Component {
    constructor(){
    super();
    this.state = {
        files: [],
        loading: false,
        uploading: false,
        uploadProgress: {},
        successfullUploaded: false,
        accept: '',
        dropzoneActive: false
      };

    this.onFilesAdded = this.onFilesAdded.bind(this);

    }
    
    /* File Function  */

   onFilesAdded(files) {
        this.setState(prevState => ({
          files: prevState.files.concat(files)
        }));
      }
      async uploadFiles() {
        this.setState({ uploadProgress: {}, uploading: true });
        const promises = [];
        this.state.files.forEach(file => {
          promises.push(this.sendRequest(file));
        });
        try {
          await Promise.all(promises);
      
          this.setState({ successfullUploaded: true, uploading: false });
        } catch (e) {
          // Not Production ready! Do some error handling here instead...
          this.setState({ successfullUploaded: true, uploading: false });
        }
      }

    uploadProgress(file){

      const req = new XMLHttpRequest();

    req.upload.addEventListener("progress", event => {
     if (event.lengthComputable) {
      const copy = { ...this.state.uploadProgress };
      copy[file.name] = {
       state: "pending",
       percentage: (event.loaded / event.total) * 100
      };
      this.setState({ uploadProgress: copy });
     }
    });
    }


render(){
 const { imageUrl } = this.state;
    
    return(
      
<Container>
  <Row>
      <Grid>
        <h2>Adicionar documentos</h2>  
          </Grid>
    <Col>
    <div className="Upload">
    
    <CustomPreview/>


    </div> 
           
    
    </Col>
  
  </Row>

  <Row>
 
  </Row>
</Container>
    )
}

}
export default addDoc;

<div style={{ marginTop: 20 }}/>


const baseStyle = {
width: "100%",
height: 120,
padding: 30,
borderWidth: 2,
borderColor: '#666',
borderStyle: 'dashed',
borderRadius: 5
};
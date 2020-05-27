import React from 'react';
import {useDropzone} from 'react-dropzone';

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
  
class DropToParent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    } 
}

onChangeHandler = async event=>{
  event.preventDefault();
  this.state.selectedFile = event.target.files[0];
  //this.setState({ [event.target.name]: event.target.value })

  this.props.parentCallback(this.state.selectedFile);

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

export default DropToParent;
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
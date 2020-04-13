// MyApp.js
import React, { Component } from 'react';
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';

/*
Images: png, jpeg, gif, bmp, including 360-degree images
pdf
csv
xslx
docx
Video: mp4, webm
Audio: mp3
*/

class FileViewerComp extends Component {

  constructor(props){
    super(props);
    
    console.log("type", props.fileType);
    console.log("file", props.file);
  }  

  render() {
    return (
      <FileViewer
        fileType={this.props.fileType}
        filePath={this.props.file}
        errorComponent={CustomErrorComponent}
        onError={this.onError}/>
    );
  }

}

export default FileViewerComp;
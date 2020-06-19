import React from "react";
import { Col, Row, Button } from 'react-bootstrap'
import negotiationHelper from '../agreements/negotiationHelperAPI';
import TSAHelperAPI from '../tsaAPI/TSAHelperAPI';
import FileViewerComp from './FileViewerComp';
import paramHelper from '../helper/paramHelper';

var mime = require('mime-types')

var data = null;
var mimetype;

class index extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        file:'',
        fileType:'',
        lastVersion:'',
        renderPage:false
      }
    }  
    onButtonClick = event => {
      event.preventDefault();

      const link = document.createElement('a');
      link.href = this.state.file;
      link.setAttribute('download', `${this.state.file}`);
      // 3. Append to html page
      document.body.appendChild(link);
      // 4. Force download
      link.click();
      // 5. Clean up and remove the link
      link.parentNode.removeChild(link);
    
      }

    async getDocumentContent (type,id) {
        var resultData = null;

        console.log('type::', type);

        // Handle contenty id type
        if (type ==="negotiations"){
          resultData = await negotiationHelper.lastVersion(id);
          data = resultData.data;
          mimetype = resultData.dataType;
        }
        if (type ==="TSA"){
          resultData = await TSAHelperAPI.getTSAData(id);
          data = resultData.datastamped;
          mimetype = 'application/pdf';
        }

        if (resultData){

          const buffer = Buffer(data,'base64');
          const fileAsBlob = new Blob([buffer], {type:mimetype});
          var blobUrl = URL.createObjectURL(fileAsBlob);
          this.setState({file:blobUrl,                       
                           fileType:mime.extension(mimetype),
                           renderPage:true
          });

          // Download  temporary
          if (type ==="TSA"){
          const link = document.createElement('a');
          link.href = blobUrl;
          link.setAttribute('download', `DocVeritas TSA.${this.state.file}`);
          // 3. Append to html page
          document.body.appendChild(link);
          // 4. Force download
          link.click();
          // 5. Clean up and remove the link
          link.parentNode.removeChild(link);
        }
          
        }
      }

    componentDidMount(){
      let param = paramHelper.base64ParamDecode();

      if (param.id !==null)
        this.getDocumentContent(param.type, param.id)

    }

    render() {

      let pageToRender= <></>
     // this.state.file = 'images/bg01.png';
     // this.state.fileType = 'png';
      if (this.state.renderPage)
        pageToRender=<FileViewerComp file={this.state.file} fileType={this.state.fileType}/>
          
      return (
          <Col>
            <Button size="sm" className="buttonCenter" onClick={this.onButtonClick}>Guardar PDF</Button>
            {pageToRender}
          </Col>
       
      )
    }
  }
    

export default index;
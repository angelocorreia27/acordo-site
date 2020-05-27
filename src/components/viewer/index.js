import React from "react";
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
   
    async getDocumentContent (type,id) {
        var resultData = null;
        // Handle contenty id type
        if (type ==="negotiations"){
          resultData = await negotiationHelper.lastVersion(id);
          data = resultData.data;
          mimetype = data.mimetype;
        }
        if (type ==="TSA"){
          resultData = await TSAHelperAPI.getTSAData(id);
          data = resultData.datastamped;
          mimetype = 'application/pdf';
        }

        if (resultData){

          //const buffer = Buffer.from(data.data.data);
          const buffer = Buffer(data,'base64');
          const fileAsBlob = new Blob([buffer], {type:mimetype});
          var blobUrl = URL.createObjectURL(fileAsBlob);
          this.setState({file:blobUrl,                       
                           fileType:mime.extension(mimetype),
                           renderPage:true
          });

          // Download

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

    componentDidMount(){
      let param = paramHelper.base64ParamDecode();
      console.log("param.id", param.id);
      console.log("param.type", param.type);

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
          <>
          {pageToRender}
          </>
       
      )
    }
  }
    

export default index;
import React from "react";
import negotiationHelper from '../agreements/negotiationHelperAPI';
import FileViewerComp from './FileViewerComp';
import paramHelper from '../helper/paramHelper';

var mime = require('mime-types')

let data = null
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
   
    async getDocumentContent (negotiationId) {

        let lastVersion = await negotiationHelper.lastVersion(negotiationId);
        if (lastVersion){

          data = lastVersion.data;

          const buffer = Buffer.from(data.data.data);

          const fileAsBlob = new Blob([buffer], {type:data.mimetype});
          var blobUrl = URL.createObjectURL(fileAsBlob);
          console.log('mime type', data.mimetype);
         this.setState({file:blobUrl,                       
                           fileType:mime.extension(data.mimetype),
                           renderPage:true
          })
          
        }
      }

    componentDidMount(){
      let param = paramHelper.base64ParamDecode();
      console.log("param.negotiationId", param.negotiationId);

      if (this.state.negotiationId !==null)
        this.getDocumentContent(param.negotiationId)

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
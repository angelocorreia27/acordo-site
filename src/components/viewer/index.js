import React from "react";
import negotiationHelper from '../agreements/negotiationHelperAPI';
import MyComponent from './MyComponent';


import paramHelper from '../helper/paramHelper';
import { Base64 } from 'js-base64';

const fs = require('fs')

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
          
          //console.log('buffer', buffer);

         //
         // var file = new File(buffer, "filename");
         // var objectURL = URL.createObjectURL(file);
         // console.log(objectURL);
          console.log('buffer data ->', data.data.data);
          console.log('buffer mime type', data.mimetype);
        // const arr = new Uint8Array(data.data.data);
       //  console.log('arr', arr);
        // var blob = new Blob([data.data.data], { type: 'application/pdf' });
        // var url = URL.createObjectURL(blob);

        //const readable = toStream(Buffer.from(data.data.data, 'Buffer'))

        // const blobUrl = await toBlobURL(readable, data.mimetype)

        
       let result =  fs.writevSync("./teste.pdf", buffer)

         this.setState({file:'/teste.pdf',                       
                           fileType:'pdf',
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
        pageToRender=<MyComponent file={this.state.file} fileType='pdf'/>
          
      return (
          <>
          {pageToRender}
          </>
       
      )
    }
  }
    

export default index;
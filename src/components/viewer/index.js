import React from "react";
import Editor from "../FileEditor/Editor";
import Fileview from "../FileEditor/Fileview";
import {Button} from 'react-bootstrap';
import axios from 'axios'

function sendDocumentAndGetLink (document) {
  try {
    return axios.post({
      url: 'http://localhost:8000/negotiation/upload',
      followAllRedirects: true,
      form: document
    })
  } catch (err) {
    console.log(err);
  }
}


class index extends React.Component {

    constructor(props){
      super(props);
      this.handleEditor = this.handleEditor.bind(this);
      this.handleLFileview = this.handleLFileview.bind(this);
      this.state = {Viewer: false};

    }  
    handleEditor() {
      this.setState({Viewer: true});
    }
  
    handleLFileview() {
      this.setState({Viewer: true});
    }

    async onButtonClick () {
      let result = await sendDocumentAndGetLink({
        header: document(this.state.header),
        footer: document(this.state.footer)
      })
      window.location.href = result
    }
    
    render() {
     
  
      return (
        <div>test... 
          
        </div>
      );
    }
  }
    

export default index;
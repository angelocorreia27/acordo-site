import React from 'react';
import * as env from '../../env';

import DropToParent from '../FileEditor/DropToParent'
import axiosHelper from '../helper/axiosHelper';
import AlertComp from '../alert';

class Index extends React.Component {

	constructor(props) {
        super(props)

        this.state = {
			id:null,
            file:null
        }
	}
	
	// Callback the data inserted in DropToParent
	 callbackFunction = async (data) => {

		const uploadHeaders = {headers: {'Content-type': 'multipart/form-data'}, withCredentials: true}

		const url = env.httpProtocol
		+env.serverHost
		+':'+env.serverPort
		+'/tsa/register';

		const fdata = new FormData(); 
		fdata.append('fileData', data);
		fdata.append('version', 'v1');
		fdata.append('hashAlgorithm', 'SHA256');
		fdata.append('hashedMessage', 'teste');
		fdata.append('TSAPolicyId', 1);
		//fdata.append('nonce', '');
		//fdata.append('certReq', '');
		//fdata.append('extensions', '');


		let result = await axiosHelper.axiosPost(url, fdata, uploadHeaders);
		if (result && result.id){
			this.setState({id:result.id});
		}
		

	}
	
	render() {
	const text = "You successfully add file to Timestamp Server with code: " +this.state.id;
	var alertToRender = null;
	if(this.state.id){
		alertToRender =<AlertComp variant="success" text={text} heading="Add file to Timestamp Server"/>;
	}
	//let redirectTo = '/rever?r='; //+ paramHelper.base64ParamEncode('id='+result.id);
	
	//const data = new FormData(); 
  	//data.append('title', 'title');
  	//data.append('description', 'description');
  	//data.append('dataType', 'file');
		/*
  	const url = env.httpProtocol
  	+env.serverHost
  	+':'+env.serverPort
	  +'/negotiation/upload';
*/
	  return (
		  <div>
			  {alertToRender}
              <DropToParent parentCallback={this.callbackFunction.bind(this)}/>
		  </div>
	  );
	}
  }
  export default Index;
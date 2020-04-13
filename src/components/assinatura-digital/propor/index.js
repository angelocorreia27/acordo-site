import React from 'react';
import Dropzone from '../../FileEditor/Dropzone';
import {Button} from 'react-bootstrap';
import * as env from '../../../env';
import uuid from 'uuid/v4'


class Propor extends React.Component {

render() {

	let redirectTo = '/rever?r='; //+ paramHelper.base64ParamEncode('id='+result.id);
	
	const data = new FormData(); 
	data.append('owner', uuid()); // email do utilizador em sessao
  	data.append('title', 'title');
  	data.append('description', 'description');
  	data.append('dataType', 'file');
  	//data.append('fileData', event.target.files[0]);

  	const url = env.httpProtocol
  	+env.serverHost
  	+':'+env.serverPort
	  +'/negotiation/upload';
	  
	  return (
		  <div>
			  <Button href="/assinatura-digital/editor"> Iniciar edição </Button>

              <Dropzone postUrl={url} postData={data} redirectUrl={redirectTo}/>
		  </div>
	  );
	}
  }
export default Propor;
import React from 'react';
import Dropzone from '../../FileEditor/Dropzone';
import {Container,Row,Button } from 'react-bootstrap'
import * as env from '../../../env';
import uuid from 'uuid/v4'


class Propor extends React.Component {

render() {

	let redirectTo = '/assinatura-digital/rever?r='; //+ paramHelper.base64ParamEncode('id='+result.id);
	
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
		<Container>
			<Row>
			 	<Button href="/assinatura-digital/editor" size="sm" className="buttonCenter" > Iniciar edição </Button>
		  	</Row>
			<Row>
                <Dropzone postUrl={url} postData={data} redirectUrl={redirectTo}/>
		  	</Row>
		</Container>
			
	  );
	}
  }



export default Propor;
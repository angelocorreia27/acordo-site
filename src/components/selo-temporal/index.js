import React from 'react';
import Dropzone from '../FileEditor/Dropzone'
import * as env from '../../env';


class Index extends React.Component {

render() {

	let redirectTo = '/rever?r='; //+ paramHelper.base64ParamEncode('id='+result.id);
	
	const data = new FormData(); 
  	//data.append('title', 'title');
  	//data.append('description', 'description');
  	//data.append('dataType', 'file');

  	const url = env.httpProtocol
  	+env.serverHost
  	+':'+env.serverPort
	  +'/negotiation/upload';

	  return (
		  <div>
              <Dropzone postUrl={url} postData={data} redirectUrl={redirectTo}/>
		  </div>
	  );
	}
  }
  export default Index;
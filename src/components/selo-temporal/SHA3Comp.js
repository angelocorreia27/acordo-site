import React from 'react';
import Dropzone from '../FileEditor/Dropzone'
import * as env from '../../env';
import { SHA3 } from 'sha3';


class SHA3Comp extends React.Component {


componentDidMount(){
	const hash = new SHA3(512);

	hash.update('hello teste esfrt testet tesfret etestet');
	console.log('hello digested: ', hash.digest('hex'));
	console.log('length: ', hash.digest('hex').length);

}

render() {

	  return (
		  <div>
		  </div>
	  );
	}
  }
  export default SHA3Comp;
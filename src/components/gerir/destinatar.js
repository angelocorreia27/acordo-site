import React from 'react';
import Dropzone from '../FileEditor/Dropzone';
import MenuHeader from '../../pages/MenuHeader';
import Footer from '../../pages/Footer';
import Rever from './Rever';

class Destinatar extends React.Component {

render() {

	  return (
		  <div>
              <MenuHeader hearderName="gerir"></MenuHeader>
			  <Rever></Rever>
              <Footer></Footer>
		  </div>
	  );
	}
  }
  export default Destinatar;
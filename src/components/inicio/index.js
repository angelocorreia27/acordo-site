import React from 'react';
import Dropzone from '../FileEditor/Dropzone';
import MenuHeader from '../../pages/MenuHeader';
import Footer from '../../pages/Footer';

class Inicio extends React.Component {

render() {

	  return (
		  <div>
              <MenuHeader hearderName="inicio"></MenuHeader>
              <Dropzone></Dropzone>
              <Footer></Footer>
		  </div>
	  );
	}
  }
  export default Inicio;
import React from 'react';
import Dropzone from '../FileEditor/Dropzone';
import MenuHeader from '../../pages/MenuHeader';
import Footer from '../../pages/Footer';
import Inbox from "./../gerir/Inbox";

class Inicio extends React.Component {

render() {

	  return (
		  <div>
              <MenuHeader hearderName="gerir"></MenuHeader>
			  <Inbox></Inbox>
              <Footer></Footer>
		  </div>
	  );
	}
  }
  export default Inicio;
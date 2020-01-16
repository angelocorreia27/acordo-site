import React from 'react';
import Dropzone from '../FileEditor/Dropzone';
import MenuHeader from '../../pages/MenuHeader';
import Footer from '../../pages/Footer';
import Review from "./../gerir/Review";

class Inicio extends React.Component {

render() {

	  return (
		  <div>
              <MenuHeader hearderName="gerir"></MenuHeader>
			  <Review></Review>
              <Footer></Footer>
		  </div>
	  );
	}
  }
  export default Inicio;
import React from 'react';
import Dropzone from '../FileEditor/Dropzone';
import MenuHeader from '../../pages/MenuHeader';
import Footer from '../../pages/Footer';
import Contract from './Contract';

class Inicio extends React.Component {

render() {

	  return (
		  <div>
              <MenuHeader></MenuHeader>
			  <Contract></Contract>
              <Footer></Footer>
		  </div>
	  );
	}
  }
  export default Inicio;
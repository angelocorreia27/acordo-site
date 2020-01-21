import React from 'react';
import Dropzone from '../FileEditor/Dropzone';
import MenuHeader from '../../pages/MenuHeader';
import Footer from '../../pages/Footer';
import ModelCard from './ModelCard';
class Inicio extends React.Component {

render() {

	  return (
		  <div>
              <MenuHeader hearderName="modelo"></MenuHeader>
			  <ModelCard></ModelCard>
              <Footer></Footer>
		  </div>
	  );
	}
  }
  export default Inicio;
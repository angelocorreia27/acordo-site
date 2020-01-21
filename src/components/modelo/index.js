import React from 'react';
import MenuHeader from '../../pages/MenuHeader';
import Footer from '../../pages/Footer';
import ModelCard from './ModelCard';
class Modelo extends React.Component {

render() {

	  return (
		  <div>
              <MenuHeader hearderName="modelo"></MenuHeader>

				<div className="d-inline-p-1">
					<ModelCard></ModelCard>
				</div>
			
				<div className="d-inline-p-2">
					<ModelCard></ModelCard>
				</div>
								
			       <Footer></Footer>
		 </div>
	  );
	}
  }
  export default Modelo;
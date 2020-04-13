import React from 'react';
import ModelCard from './ModelCard';

class Modelo extends React.Component {

render() {

	  return (
		  <div>

				<div className="d-inline-p-1">
					<ModelCard></ModelCard>
				</div>			
				<div className="d-inline-p-2">
					<ModelCard></ModelCard>
				</div>
				
		 </div>
	  );
	}
  }
  export default Modelo;
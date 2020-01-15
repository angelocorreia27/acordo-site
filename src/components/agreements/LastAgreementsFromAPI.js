import React from 'react';
import axiosHelper from '../helper/axiosHelper';

let acordos = [];

class LastAgreementsFromAPI extends React.Component {

	componentDidMount() {
		const result = axiosHelper.axiosGet('negotiation/all');
		result.then((data) => {
			console.log('data ', data);
			acordos = data;
		})
	}

render() {
	  return (
				<ul className="style2">
					{acordos.length > 0 ? (
						acordos.map((dados) => (
							<li><a href="#"> {dados.title}</a></li>
						)
						)) : (
							<li>No data </li>
						)}
				</ul>
	  );
	}
  }
  export default LastAgreementsFromAPI;
import React from 'react';
import axiosHelper from '../helper/axiosHelper';
import * as env from '../../env';

const url = env.httpProtocol
+env.serverHost
+':'+env.serverPort
+'/negotiation/all/';

class LastAgreementsFromAPI extends React.Component {
	constructor (props) {
		super(props);
		this.state={
			acordos:[]
		}
		
	}
	async componentDidMount() {
		   const paramHeaders = {headers: {'Accept': 'application/json' //,
                                   //'Content-type': 'application/json'
								   }
    , withCredentials: true
      }

		let acordos = await axiosHelper.axiosGet(url,paramHeaders);
		this.setState({acordos})
	}

render() {
	  return ( <>
			
				<ul className="style2">
					{this.state.acordos.length > 0 ? (
						this.state.acordos.map(dados => (
							<li key={dados.id} ><a href="#"> {dados.title}</a></li>
						)
						)) : (
							<li>No data </li>
						)}
				</ul>
				</>);
	}
  }
  export default LastAgreementsFromAPI;
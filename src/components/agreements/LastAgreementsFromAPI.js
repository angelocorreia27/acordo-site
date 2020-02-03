import React from 'react';
import axiosHelper from '../helper/axiosHelper';
import * as env from '../../env';
import { BeatLoader } from "react-spinners";

class LastAgreementsFromAPI extends React.Component {
	constructor (props) {
		super(props);
		this.state={
			acordos:[]
		}
		
	}
	async componentDidMount() {
		
		const url = env.httpProtocol
		+env.serverHost
		+':'+env.serverPort
		+'/negotiation/all/';

		   const paramHeaders = {headers: {'Accept': 'application/json' //,
                                   //'Content-type': 'application/json'
								   }
    , withCredentials: true
      }

		let acordos = await axiosHelper.axiosGet(url,paramHeaders);
		this.setState({acordos})
	}
	
	componentDidUpdate() {
		setTimeout(() => { this.setState({ loading: !this.state.loading && this.state.acordos > 0 }) }, 1000);
	  }

render() {
	let index= 5;
	  return ( <>
			
				<ul className="style2">
				
					{this.state.acordos && this.state.acordos.length > 0  && this.state.acordos.slice(-5) ? (
				
						this.state.acordos.map(dados => (
							
							<li key={dados.id} ><a href="#"> {dados.title}</a></li>

						)
						)) : (
							<li>
								<tr><BeatLoader
								color="#2196F3"
								size={5}
								loading={this.state.loading} onLoad={this.componentDidUpdate}
								/></tr></li>
					
					
					)}
				</ul>
				</>);
	}
  }
  export default LastAgreementsFromAPI;
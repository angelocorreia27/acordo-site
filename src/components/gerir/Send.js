import React from 'react'
import {Button, Form, FormControl, Row, Col, Table} from 'react-bootstrap';
import { Icon, Menu } from 'antd';
import Footer from '../../pages/Footer';
import MenuHeader from '../../pages/MenuHeader';
import axiosHelper from '../helper/axiosHelper';
import * as env from '../../env';
import { BeatLoader } from "react-spinners";



class Recebidos extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            loading: true,
            acordos: [],
            ...props,
        }
    }
    async componentDidMount() {
		
		const url = env.httpProtocol
		+env.serverHost
		+':'+env.serverPort
		+'/negotiation/send/';

		   const paramHeaders = {headers: {'Accept': 'application/json' //,
                                   //'Content-type': 'application/json'
								   }
    , withCredentials: true
      }

		let acordos = await axiosHelper.axiosGet(url,paramHeaders);
		this.setState({acordos})
	}

render() {
	const loading = this.state.acordos;
	if(!this.state.acordos.length || loading){
		return (<BeatLoader
		color="#2196F3"
		size={10}
		loading={this.state.loading} onLoad={this.componentDidUpdate}
		/>)
	}
	  return ( <>
			
				<ul className="style2">
					{this.state.acordos && this.state.acordos.length > 0 ? (
						this.state.acordos.map(dados => (
							<li key={dados.id} ><a href={this.componentDidMount}> {dados.title}</a></li>
						)
						)) : (
							<li>
								<tr></tr></li>
						)}
				
				</ul>
				</>);


}


}export default Recebidos;
import React from 'react';
import axiosHelper from '../helper/axiosHelper';
import * as env from '../../env';
import paramHelper from '../helper/UtilHelper';
import {InputGroup, FormControl,Button} from 'react-bootstrap'

const headers = {headers: {'Content-type': 'multipart/form-data'}, withCredentials: true};

class Search extends React.Component {
	  constructor(props) {
		super(props);
		this.state = {
			productCode: "",
			url: ""
		}
		this.onSearchClick = this.onSearchClick.bind(this)
		this.changeHandler = this.changeHandler.bind(this)
		// set var from props
		this.state.url = this.props.url;

	}

async onSearchClick (){
	console.log("url ", this.state.url);
	console.log("productCode ", this.state.productCode);
	let result = await axiosHelper.axiosGet(env.httpProtocol+
											env.serverHost+':'+
											env.serverPort+'/'+
											this.state.url+
											this.state.productCode, headers);
	
	// view file temporary. should receive confirmation that id exist
	// if payed, should receive the file + TSA public key
	console.log('result: ', result);
	if (result){
		window.location.href = '/viewer?r=' + paramHelper.base64ParamEncode('type=TSA&id='+result.id);
	}
}

changeHandler = e => {
	this.setState({ [e.target.name]: e.target.value })
}
		  
render() {
	  return (
		<div>
			<InputGroup className="mb-3">
				<FormControl
					placeholder="Product code"
					aria-label="id"
					aria-describedby="basic-addon2"
					name="productCode"
					onChange={this.changeHandler}
				/>
				<InputGroup.Append>
					<Button variant="outline-secondary" onClick={this.onSearchClick}>Procurar</Button>
				</InputGroup.Append>
			</InputGroup>
		</div>
	  );
	}
  }
export default Search;


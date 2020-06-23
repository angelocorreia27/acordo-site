import React from 'react';
import Dropzone from '../../FileEditor/Dropzone';
import {Card, Container, Row, Button, Col, Form } from 'react-bootstrap'
import * as env from '../../../env';
import uuid from 'uuid/v4'

//import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react
class Propor extends React.Component {
	constructor(props) {

		super(props);
		this.state = {
		  title: "",
		  description: ""
	
		}
	}
	submitHandler = event => {
		event.preventDefault();
		this.refs.theForm.submit();
	
	  }
	changeHandler = event => {
		this.setState({ [event.target.name]: event.target.value })
	
	  }
	
	render() {


	let redirectTo = '/assinatura-digital/rever?r='; //+ paramHelper.base64ParamEncode('id='+result.id);
	
	const data = new FormData(); 
	data.append('owner', uuid()); // email do utilizador em sessao
  	data.append('title', this.state.title);
  	data.append('description', this.state.description);
  	data.append('dataType', 'file');
  	//data.append('fileData', event.target.files[0]);

  	const url = env.httpProtocol
  	+env.serverHost
  	+':'+env.serverPort
	  +'/negotiation/upload';
	  
	  return (
		<Container>

					<Row>
						<Col md={2} md={8} sm={12}>
							<Form ref="theForm" onSubmit={this.submitHandler} method="GET" action="/assinatura-digital/editor" encType="multipart/form-data"  >
							<Form.Group controlId="formBasicTitulo">
								<Form.Label>Nome do documento</Form.Label>
								<Form.Control type="text" placeholder="Escreva um nome para o documento" name="title" onChange={this.changeHandler} />
							</Form.Group>
								<Form.Group controlId="formBasicDescricao">
									<Form.Label>Descricão do documento</Form.Label>
									<Form.Control type="text" placeholder="Escreva uma descricão que identifique o documento" name="description" onChange={this.changeHandler} />
								</Form.Group>
							</Form>
						</Col>
					</Row>
			  		<br/>
					<Row>
						
						<Col md={2} md={8} sm={12}>
							<Button variant="outline-primary" className="buttonCenter"onClick={this.submitHandler} >Iniciar edição </Button>
							<Dropzone postUrl={url} postData={data} redirectUrl={redirectTo}/>
						</Col>
					</Row>
			
		</Container>

			
	  );
	}
  }



export default Propor;
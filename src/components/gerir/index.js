
import React from 'react';

import Dropzone from '../FileEditor/Dropzone';

import MenuHeader from '../../pages/MenuHeader';

import Footer from '../../pages/Footer';

import Inbox from "./../gerir/Inbox";

import Recebidos from './Recebidos';

import Send from './Send'
import Arquivar from './arquivar';
import { Row } from 'react-bootstrap';

class Inicio extends React.Component {

	constructor(props){

		super(props);

		this.state = {

		classNameRecebidos:null,

		classNameEnviados:null,

		classNameArquivados:null,

		showingPage:null 

}

	if(this.state.hearderName=='recebidos')

	this.state.classNameRecebidos = 'current_page_item'

	if(this.state.hearderName=='enviados')

	this.state.classNameEnviados = 'current_page_item'

	if(this.state.hearderName=='arquivados')

	this.state.classNameArquivados = 'current_page_item'


	}



	handleInboxClick() {

	this.setState({showingPage: 'inbox'});

	}



	handleSendedClick() {

	this.setState({page: 'sended'});

		}



	handleArchiviedClick() {

	this.setState({page: 'archivied'});

	}

		render() {
		let pageToRender;

		if (this.props.showingPage==='inbox') {

		pageToRender = <Inbox onClick={this.handleInboxClick} />;

		} 

		if (this.props.showingPage==='sended') {

		pageToRender = <Send onClick={this.handleSendedClick} />;

		}


		if (this.props.showingPage==='archivied') {

		pageToRender = <Arquivar onClick={this.handleSendedClick} />;

		}
		return (

		<Row>
					
					<MenuHeader hearderName="gerir"></MenuHeader>
			      <Inbox/>
						{pageToRender}
					
					<Footer></Footer>

		</Row>

		);

		}

		}

export default Inicio;



import React from 'react';
import Inbox from "./../gerir/Inbox";
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


		return (

		<Row>
					
			      <Inbox/>
						{pageToRender}
					

		</Row>

		);

		}

		}

export default Inicio;


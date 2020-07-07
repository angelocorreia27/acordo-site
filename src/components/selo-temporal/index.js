import React from 'react';
import * as env from '../../env';

import DropToParent from '../FileEditor/DropToParent'
import axiosHelper from '../helper/axiosHelper';
import AlertComp from '../alert';

class Index extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			id: null,
			file: null
		}
	}

	// Callback the data inserted in DropToParent
	callbackFunction = async (data) => {

		const uploadHeaders = { headers: { 'Content-type': 'multipart/form-data' }, withCredentials: true }

		const url = env.httpProtocol
			+ env.serverHost
			+ ':' + env.serverPort
			+ '/tsa/register';

		const fdata = new FormData();
		fdata.append('fileData', data);
		fdata.append('version', 'v1');
		fdata.append('hashAlgorithm', 'SHA256');
		fdata.append('hashedMessage', 'teste');
		fdata.append('TSAPolicyId', 1);
		//fdata.append('nonce', '');
		//fdata.append('certReq', '');
		//fdata.append('extensions', '');


		let result = await axiosHelper.axiosPost(url, fdata, uploadHeaders);
		if (result && result.id) {
			this.setState({ id: result.id });
		}


	}

	render() {
		const text = "You successfully add file to Timestamp Server with code: " + this.state.id;
		var alertToRender = null;
		if (this.state.id) {
			alertToRender = <AlertComp variant="success" text={text} heading="Add file to Timestamp Server" />;
		}
		//let redirectTo = '/rever?r='; //+ paramHelper.base64ParamEncode('id='+result.id);

		//const data = new FormData(); 
		//data.append('title', 'title');
		//data.append('description', 'description');
		//data.append('dataType', 'file');
		/*
  	const url = env.httpProtocol
  	+env.serverHost
  	+':'+env.serverPort
	  +'/negotiation/upload';
*/
		return (
			<div>
				<div className="container">
					<div id="content">
						<div className="title">
							<span className="byline">O serviço de TimeStamp (Validação Cronológica) utiliza a infraestrutura de chaves públicas
									e fontes de tempo confiáveis para disponibilizar selos temporais fiáveis, conforme padrões internacionais.</span>
						</div>

						<p>Quando assinamos um documento, é essencial registrar a data e hora em que este documento foi validado pelas partes envolvidas no processo. É essa marcação temporal  que define sua validade legal. Com a popularização da certificação digital, surgiu um problema: como garantir a data e hora de documentos eletrônicos? Para resolver essa questão, surgiram os carimbos do tempo (selo temporal).
						O selo temporal atesta a data e hora de criação, envio ou receção de um documento ou transação eletrónica feita em uma organização.
									Sendo assim, o principal objetivo dos selos temporais é garantir que um documento (ou ficheiro) existia no momento em que foi gerado o selo e certificar a veracidade da hora e data do pedido, mas também a integridade e não repúdio do conteúdo.</p>

						<h2 className="title">Submete aqui o seu ficheiro para Validação Cronológica</h2>

					</div>

					{alertToRender}
					<DropToParent parentCallback={this.callbackFunction.bind(this)} />
				</div>

			</div>
		);
	}
}
export default Index;
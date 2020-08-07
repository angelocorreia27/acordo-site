import React from 'react';
import { Button } from 'react-bootstrap';
import { SELO_DIGITAL } from '../../store/constant';
import CardModel from '../../pages/CardModal';
import axiosHelper from '../helper/axiosHelper';
import authHelper from '../helper/authHelper';
import { Base64 } from 'js-base64';
import * as env from '../../env';
import UtilHelper from '../helper/UtilHelper';

class Index extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			listMarkets: []
		};
	}

	async componentDidMount() {
		const token = Base64.encode(await authHelper.getHeaderToken());
		const paramHeaders = {
			headers: {
				'Accept': 'application/json',
				'Authorization': 'Bearer ' + token
			}, withCredentials: true
		};

		const result = await axiosHelper.axiosGet(env.dataBaseEndPoint + '/market/listAll', paramHeaders);
		if (result && result.ebit_markets)
			this.setState({ listMarkets: result.ebit_markets });

		console.log('result:: ', result);

	}
	render() {

		/** 
		 * Passos para criação da organização que irá ter selo electrónico
		 * 	Registo de Conta no Autentika
		 *  Login -> Validação da conta
		 * 		após validação criar
		 * 			DVClient
		 * 			DVSecret
		 * 		Criar certificado
		 * 
		 * POST para criação do documento
		 * 		O utilizador faz o post para o link e deve indicar:
		 * 			DVClient   --- Codigo do utilizador criado na  plataforma e indicado através de um canal seguro
		 * 			DVSecret   --- Chave criado na plataforma e indicado ao utilizador através de um canal seguro
		 * 			SPAutentikaToken  --- token do autentika para reforçar a permissão para criação do documento
		 * 			owner  --- Associa o documento a um utilizador
		 * 			public  --- O documento pode ser consultado publicamente
		 
		 * Get para visualização do documento
		 *		o utilizador faz ao efectuar o get para o link deve indicar:
					  SPAutentikaToken 		
		 * 			
		 * **/
		return (
			<div>
				<div className="container">
					<div id="content">
						<div className="title">
							<span className="byline">Visa criar um selo digitalmente válido, com um carácter comprovante, das transações realizadas na plataforma.</span>
						</div>
						<p>São aplicados em nome de pessoas coletivas, como organizações ou instituições, com garantia de integridade e autenticidade da origem dos dados
						Foi desenvolvido para superar as desvantagens e inconvenientes do sistema atual, substituir a centralização dos processos
								por uma linha verde da desburocratização. </p>
						<Button variant="outline-primary" className="button-p" href={SELO_DIGITAL.ListOrganization} >Criar o meu</Button>
					</div>
					<br />
					<div className="grid-container">
						{
							this.state.listMarkets.length > 0 ? (
								this.state.listMarkets.map((cc, i) => {
									return <div key={i}>
										<div key={"div-grid" + i} className="grid-item"><CardModel key={"api" + cc.id} divStyle={{ width: '16rem' }} title={cc.name.substr(0, 20)}
											imsSrc={cc.image ? cc.image : "/images/api.svg"}
											buttonText="Executar"
											buttonAction={SELO_DIGITAL.Executar
												+ "?r=" + UtilHelper.base64ParamEncode('marketId=' + cc.id)}
											buttonStatus="active"
											text={cc.description.substr(0, 18) + ".."} />
										</div>
									</div>
								})) : (<><div>no data</div></>
								)
						}
					</div>

				</div>

			</div>
		);
	}
}
export default Index;
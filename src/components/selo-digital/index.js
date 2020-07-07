import React from 'react';
import { Button } from 'react-bootstrap';
import { SELO_DIGITAL, CONSTANT } from '../../store/constant';
import CardModel from '../../pages/CardModal';


class Index extends React.Component {

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
						<Button variant="outline-primary" className="button-p" href={SELO_DIGITAL.CreateBusinessFlow} >Iniciar</Button>
					</div>

				</div>

				
			<div className="divTable">
				<div className="divTableBody">
					
					<div className="divTableRow"><br/></div>

					<div className="divTableRow">
						<div className="divTableCell"><CardModel title="Selo temporal" 
															 imsSrc="/images/selo-temporal.svg"
															 buttonText="Ver mais.."
															 buttonAction={CONSTANT.SELO_TEMPORAL}
															 buttonStatus="active" 
															 text="Atesta o momento temporal da criação de um documento no servidor."
															 />
						</div>
						<div className="divTableCell"><CardModel title="Selo digital" 
															 imsSrc="/images/selo-eletronico.svg"
															 buttonText="Ver mais.." 
															 buttonAction={CONSTANT.SELO_DIGITAL}
															 buttonStatus="active" 
															 text="Visa criar um selo digitalmente válido, com um caracter comprovante."
															 />
						</div>
						
					</div>
					<div className="divTableRow"><br/></div>

					<div className="divTableRow">
						<div className="divTableCell"><CardModel title="Assinatura digital" 
															 imsSrc="/images/assinatura-digital.svg"
															 buttonText="Ver mais.." 
															 buttonAction={CONSTANT.ASSINATURA_DIGITAL}
															 buttonStatus="active" 
															 text="Vinculada o documento criado digitalemente, a um certificado digital."
															 />
						</div>
						<div className="divTableCell"><CardModel title="Certificados SSL" 
															 imsSrc="/images/certificado-ssl.svg"
															 buttonText="Ver mais.."
															 buttonAction={CONSTANT.CERTIFICADO_SSL}
															 buttonStatus="disabled" 
															 text="Autentica a identidade de um site e criptografa as informações enviadas para o servidor."
															 />
						</div>
						
					</div>
				</div>
			</div>	
			</div>
		);
	}
}
export default Index;
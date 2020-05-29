import React from 'react';
import {Container,Row } from 'react-bootstrap'

import CardModel from './CardModal';
import TitleSearch from '../components/titleSearch';
import Title from '../components/title';
import Search from '../components/search';

class Home extends React.Component {
constructor(props){
 super(props);
 this.state = {
	loading: false
  };

}


render() {
	  return (
		<Container>
			
			<Row>
				
			<div className="divTable">
				<div className="divTableBody">
					
				<div className="divTableRow">
						<div className="divTableCell"><Title/>
						</div>
						<div className="divTableCell"><Search url="tsa/"/>
						</div>
						
					</div>
					<div className="divTableRow"><br/></div>

					<div className="divTableRow">
						<div className="divTableCell"><CardModel title="Selo temporal" 
															 imsSrc="/images/selo-temporal.svg"
															 buttonText="Ver mais.."
															 buttonAction="/selo-temporal"
															 buttonStatus="active" 
															 text="Atesta o momento temporal da criação de um documento no servidor."
															 />
						</div>
						<div className="divTableCell"><CardModel title="Selo digital" 
															 imsSrc="/images/selo-eletronico.svg"
															 buttonText="Ver mais.." 
															 buttonAction="/selo-eletronico"
															 buttonStatus="disabled" 
															 text="Visa criar um selo digitalmente válido, com um caracter comprovante."
															 />
						</div>
						
					</div>
					<div className="divTableRow"><br/></div>

					<div className="divTableRow">
						<div className="divTableCell"><CardModel title="Assinatura digital" 
															 imsSrc="/images/assinatura-digital.svg"
															 buttonText="Ver mais.." 
															 buttonAction="/assinatura-digital"
															 buttonStatus="disabled" 
															 text="Vinculada o documento criado digitalemente, a um certificado digital."
															 />
						</div>
						<div className="divTableCell"><CardModel title="Certificados SSL" 
															 imsSrc="/images/certificado-ssl.svg"
															 buttonText="Ver mais.."
															 buttonAction="/certificado-ssl"
															 buttonStatus="disabled" 
															 text="Autentica a identidade de um site e criptografa as informações enviadas para o servidor."
															 />
						</div>
						
					</div>
				</div>
			</div>	
			</Row>
			</Container>
	  );
	}
  }
  export default Home;

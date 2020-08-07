import React from 'react';
import {Container,Row } from 'react-bootstrap'

import CardModel from './CardModal';
import TitleSearch from '../components/titleSearch';
import Title from '../components/title';
import Search from '../components/search';
import authHelper from '../components/helper/authHelper';
import {CONSTANT} from '../store/constant';

class Home extends React.Component {
constructor(props){
 super(props);
 this.state = {
	loading: false
  };
  // Setting home root
  
}


render() {
	  authHelper.SetStore('originPath', '/');
	  authHelper.BackToHistory();
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
						<div className="divTableCell"><CardModel title="DocTime" 
															 imsSrc="/images/selo-temporal.svg"
															 buttonText="Ver mais.."
															 buttonAction={CONSTANT.SELO_TEMPORAL}
															 buttonStatus="active" 
															 text="Atesta o momento temporal da criação de um documento no servidor."
															 />
						</div>
						<div className="divTableCell"><CardModel title="E-SealStore" 
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
						<div className="divTableCell"><CardModel title="YouDoc" 
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
			</Row>
			</Container>
	  );
	}
  }
  export default Home;

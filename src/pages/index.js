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
															 buttonStatus="active" />
						</div>
						<div className="divTableCell"><CardModel title="Selo digital" 
															 imsSrc="/images/selo-eletronico.svg"
															 buttonText="Ver mais.." 
															 buttonAction="/selo-eletronico"
															 buttonStatus="disabled" />
						</div>
						
					</div>
					<div className="divTableRow"><br/></div>

					<div className="divTableRow">
						<div className="divTableCell"><CardModel title="Assinatura digital" 
															 imsSrc="/images/assinatura-digital.svg"
															 buttonText="Ver mais.." 
															 buttonAction="/assinatura-digital"
															 buttonStatus="disabled" />
						</div>
						<div className="divTableCell"><CardModel title="Certificados SSL" 
															 imsSrc="/images/certificado-ssl.svg"
															 buttonText="Ver mais.."
															 buttonAction="/certificado-ssl"
															 buttonStatus="disabled" />
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

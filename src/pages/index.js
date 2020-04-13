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
				
			<div class="divTable">
				<div class="divTableBody">
					
				<div class="divTableRow">
						<div class="divTableCell"><Title/>
						</div>
						<div class="divTableCell"><Search/>
						</div>
						
					</div>

					<div class="divTableRow">
						<div class="divTableCell"><CardModel title="Selo temporal" 
															 imsSrc="/images/selo-temporal.png"
															 button="Ver mais.."
															 buttonAction="/selo-temporal" />
						</div>
						<div class="divTableCell"><CardModel title="Selo electrónico" 
															 imsSrc="/images/selo-eletronico.png"
															 button="Ver mais.." 
															 buttonAction="/selo-eletronico" />
						</div>
						
					</div>
					<div class="divTableRow">
						<div class="divTableCell"><CardModel title="Assinatura digital" 
															 imsSrc="/images/assinatura-digital.png"
															 button="Ver mais.." 
															 buttonAction="/assinatura-digital" />
						</div>
						<div class="divTableCell"><CardModel title="Certificados SSL" 
															 imsSrc="/images/certificado-ssl.png"
															 button="Ver mais.."
															 buttonAction="/certificado-ssl" />
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

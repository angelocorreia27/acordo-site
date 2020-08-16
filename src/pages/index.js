import React from 'react';
import {Container,Row } from 'react-bootstrap'

import CardModel from './CardModal';
import TitleSearch from '../components/titleSearch';
import Title from '../components/title';
import Search from '../components/search';
import authHelper from '../components/helper/authHelper';
import {CONSTANT} from '../store/constant';
import { withTranslation } from 'react-i18next';

class Home extends React.Component {
constructor(props){
 super(props);
 this.state = {
	loading: false
  };
  // Setting home root
  
}


render() {
	const { t } = this.props;

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
															 buttonText={t('common:page.index.btn-see-more')}
															 buttonAction={CONSTANT.SELO_TEMPORAL}
															 buttonStatus="active" 
															 text={t('common:page.index.doc-time-text')}
															 />
						</div>
						<div className="divTableCell"><CardModel title="E-SealStore" 
															 imsSrc="/images/selo-eletronico.svg"
															 buttonText={t('common:page.index.btn-see-more')}
															 buttonAction={CONSTANT.SELO_DIGITAL}
															 buttonStatus="active" 
															 text={t('common:page.index.eseal-store-text')}
															 />
						</div>
						
					</div>
					<div className="divTableRow"><br/></div>

					<div className="divTableRow">
						<div className="divTableCell"><CardModel title="YouDoc" 
															 imsSrc="/images/assinatura-digital.svg"
															 buttonText={t('common:page.index.btn-see-more')}
															 buttonAction={CONSTANT.ASSINATURA_DIGITAL}
															 buttonStatus="active" 
															 text={t('common:page.index.digital-signin-text')}
															 />
						</div>
						<div className="divTableCell"><CardModel title="Certificados SSL" 
															 imsSrc="/images/certificado-ssl.svg"
															 buttonText={t('common:page.index.btn-see-more')}
															 buttonAction={CONSTANT.CERTIFICADO_SSL}
															 buttonStatus="disabled" 
															 text={t('common:page.index.eseal-store-text')}
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
  export default withTranslation() (Home);

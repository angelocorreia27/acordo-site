import React from 'react';
import { Container, Row } from 'react-bootstrap'

import authHelper from '../components/helper/authHelper';
import { CONSTANT } from '../store/constant';

class GridMenu extends React.Component {
	constructor(props) {
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

							<div className="divTableRow"><br /></div>

							<div className="divTableRow">
								<div className="divTableCell">
									<a href={CONSTANT.SELO_TEMPORAL}>
										<img className="item-menu" src="/images/selo-temporal.svg" />
									</a>
								</div>
								<div className="divTableCell">
									<a href={CONSTANT.SELO_DIGITAL}>
										<img className="item-menu" src="/images/selo-eletronico.svg" />
									</a>
								</div>

							</div>
							<div className="divTableRow"><br /></div>

							<div className="divTableRow">
								<div className="divTableCell">
									<a href={CONSTANT.ASSINATURA_DIGITAL}>
										<img className="item-menu" src="/images/assinatura-digital.svg" />
									</a>
								</div>
								<div className="divTableCell">
									<a href={CONSTANT.CERTIFICADO_SSL}>
										<img className="item-menu" src="/images/certificado-ssl.svg" />
									</a>
								</div>

							</div>
							<div className="divTableRow">
								<div className="divTableCell">
									<a href={CONSTANT.SMS_WEB_PACK}>
										<img className="item-menu" src="/images/sms.svg" />
									</a>
								</div>

							</div>
						</div>
					</div>
				</Row>
			</Container>
		);
	}
}
export default GridMenu;

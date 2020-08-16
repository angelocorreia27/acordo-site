import React from 'react';
//import Cookies from 'js-cookie';
//import * as env from '../env';
//import axios from 'axios';
//import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap'
import NavRight from '../pages/NavRight';
import i18n from "i18next";

import { CONSTANT, ASSINATURA_DIGITAL, SELO_DIGITAL, CERTIFICADO_SSL, SELO_TEMPORAL } from '../store/constant';

class MenuHeader extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hearderName: null,
			classNameInicio: null,
			classNameGerir: null,
			classNameModelo: null,

		}
		if (this.props.hearderName == 'inicio')
			this.state.classNameInicio = 'current_page_item'
		if (this.props.hearderName == 'gerir')
			this.state.classNameGerir = 'current_page_item'
		if (this.props.hearderName == 'modelo')
			this.state.classNameModelo = 'current_page_item'

	}

	changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	  }

	render() {
		//const i18n = useTranslation('common');
		const routPath = window.location.pathname.split('/');
		var seloDigitalMenu = null;
		if (routPath[1] === CONSTANT.SELO_DIGITAL.replace("/", '')) {
			seloDigitalMenu = <>
				<Nav.Item>
					<Nav.Link href={CONSTANT.SELO_DIGITAL}>Marketplace</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href={SELO_DIGITAL.ListOrganization}>Organização</Nav.Link>
				</Nav.Item>

			</>
		}
		return (
			<>

				<div className="divTable">
					<div className="divTableBody">
						<div className="divTableRow">
							<div className="divTableCell">
								<Nav className="justify-content-center"
									activeKey="/inicio"
								>
									{/* Nav Left */}

									<Nav.Item>
										<Nav.Link href="/" >
											<strong>Portal</strong>
										</Nav.Link>
									</Nav.Item>


									{seloDigitalMenu}
								</Nav>
							</div>

							<div className="divTableCell">
								<Nav className="justify-content-end">
									<Nav.Item>
									<Nav.Link onClick={() => this.changeLanguage('pt')} >
											PT
										</Nav.Link>
									</Nav.Item>
									
									<Nav.Item>
									<Nav.Link onClick={() => this.changeLanguage('en')} >
											EN
										</Nav.Link>
									</Nav.Item>

									<NavRight />

								</Nav></div>
						</div>
					</div>
				</div>
				<div>
					<hr />
				</div>
			</>
		);
	}
}
export default MenuHeader;
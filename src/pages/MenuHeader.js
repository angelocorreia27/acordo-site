import React from 'react';
import Cookies from 'js-cookie';
import * as env from '../env';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import NavRight from '../pages/NavRight';
import {CONSTANT} from '../store/constant';

class MenuHeader extends React.Component {
constructor(props){
	super(props)
	this.state = {
		hearderName:null,
		classNameInicio:null,
		classNameGerir:null,
		classNameModelo:null,	
		
	  }
	if(this.props.hearderName=='inicio')
	   this.state.classNameInicio = 'current_page_item'
	if(this.props.hearderName=='gerir')
	   this.state.classNameGerir = 'current_page_item'
	if(this.props.hearderName=='modelo')
	   this.state.classNameModelo = 'current_page_item'
	  
}


render() {
	
	const routPath = window.location.pathname.split('/');
	var seloDigitalMenu = null;

	if (routPath[1] === CONSTANT.SELO_DIGITAL){
		seloDigitalMenu = <>
						  <Nav.Item>
						  		<Nav.Link href="/selo-digital/myflexform">Meus API's</Nav.Link> 
						  </Nav.Item>
						  </>
	}
	return (
		<div>
			
		<div className="divTable">
			<div className="divTableBody">
				<div className="divTableRow">
					<div className="divTableCell">
						<Nav className="justify-content-center"
						activeKey="/inicio"
						>
							<Nav.Item>
								<Nav.Link href="/" >
									<strong>Portal</strong>
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								{/*	<Nav.Link href="/assinatura-digital/gerir" eventKey="/gerir">Gerir</Nav.Link>*/ }
							</Nav.Item>
							<Nav.Item>
								{/*	<Nav.Link href="/assinatura-digital/modelo" eventKey="/modelo">Modelo</Nav.Link> */}
							</Nav.Item>
							{seloDigitalMenu}
						</Nav>
					</div>

					<div className="divTableCell">
						<Nav className="justify-content-end"
						
						//activeKey="/inicio"
						//onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
						>
							
							<Nav.Item>
								<NavRight/>
							</Nav.Item>

						</Nav></div>
					</div>
			</div>
		</div>
			<div>
				<hr/>
			</div>
		</div>
	  );
	}
  }
  export default MenuHeader;
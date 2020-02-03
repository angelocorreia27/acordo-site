import React from 'react';
import Footer from './Footer';
import MenuHeader from './MenuHeader';
import LastAgreements from './LastAgreements';
import {BeatLoader} from "react-spinners";
import { css } from "@emotion/core";
import { Button } from 'react-bootstrap';
import {ClipLoader} from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #2196F3;
`;

class Home extends React.Component {
constructor(props){
 super(props);
 this.state = {
	loading: false
  };

}


render() {
	  return (
		<div>
			<MenuHeader></MenuHeader>

			<div id="featured">&nbsp;</div>
			<div id="wrapper">
				<div id="page" className="container">
						<div id="content">
							<div className="title">
							<span className="byline">Plataforma eletrónica de acordos públicas, robusta e flexivel.</span> </div>
							<p><strong>Acordo, </strong>consiste numa plataforma para criação documentos, contratos ou declarações escrita
							, com um caracter comprovativo, de forma a garantir a integridade 
							,autenticidade, confidencialidade e não repudio. Destinada a todas as entidades e particulares, para auxiliar no mecanismos de criação, submissão e publicação dos contratos   </p>
						    <a href="/Inicio" className="button-p">
							Propor um acordo</a>
							<div className="sweet-loading">
							
      </div>
						</div>
						<div id="sidebar">
							<LastAgreements></LastAgreements>
						</div>
				</div>
				<div id="banner-wrapper">
						<div id="banner" className="container">
							<div className="box-left">
							<span>Pode-se consultar acordos celebrados com a especificação dos fatores.</span> </div>
							<div className="box-right"> <a href="#" className="button button-big">
						
								Ver acordos celebrados</a></div>
						</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	  );
	}
  }
  export default Home;

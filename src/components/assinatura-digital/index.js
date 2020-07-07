import React from 'react';
import { Button } from 'react-bootstrap';
import { ASSINATURA_DIGITAL } from '../../store/constant';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false
		};

	}


	render() {
		return (
			<div>
				<div className="container">
					<div id="content">
						<div className="title">
							<span className="byline">Plataforma de assinatura digital de documentos, robusta e flexivel.</span>
						</div>
						<p>Com <strong>DocVeritas Digital ID, </strong>podes criar documentos, contratos ou declarações escrita
								, com um caracter comprovativo, de forma a garantir a integridade
								,autenticidade, confidencialidade e não repudio. Destinada a todas as entidades e particulares, para auxiliar no mecanismos de criação, submissão e publicação dos contratos   </p>
						<Button variant="outline-primary" className="button-p" href={ASSINATURA_DIGITAL.propor} >Iniciar</Button>

					</div>

				</div>
			</div>
		);
	}
}
export default Home;

import React from 'react';
class Index extends React.Component {

	render() {

		return (
			<div>
				<div className="container">
					<div id="content">
						<div className="title">
							<span className="byline">Um certificado SSL (Secure Sockets Layer) é um certificado
							digital que autentica a identidade de um site e criptógrafa as informações enviadas
									para o servidor usando a tecnologia SSL.</span>
						</div>
						<p>Um certificado serve como um "passaporte" eletrónico
						que estabelece as credenciais de uma entidade online
						ao fazer negócios na Internet. Quando um usuário da
						Internet tenta enviar informações confidenciais para
						um servidor de Internet, o navegador do utilizador
						acessa o certificado digital do servidor e estabelece
								  uma conexão segura.   </p>
						{/* <Button variant="outline-primary" className="button-p" href={ASSINATURA_DIGITAL.propor} >Iniciar</Button> */}

					</div>
				</div>
			</div>
		);
	}
}
export default Index;
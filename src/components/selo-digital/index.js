import React from 'react';

class Index extends React.Component {

render() {
	/** 
	 * Passos para criação da organização que irá ter selo electrónico
	 * 	Registo de Conta no Autentika
	 *  Login -> Validação da conta
	 * 		após validação criar
	 * 			DVClient
	 * 			DVSecret
	 * 		Criar certificado
	 * 
	 * POST para criação do documento
	 * 		O utilizador faz o post para o link e deve indicar:
	 * 			DVClient   --- Codigo do utilizador criado na  plataforma e indicado através de um canal seguro
	 * 			DVSecret   --- Chave criado na plataforma e indicado ao utilizador através de um canal seguro
	 * 			SPAutentikaToken  --- token do autentika para reforçar a permissão para criação do documento
	 * 			owner  --- Associa o documento a um utilizador
	 * 			public  --- O documento pode ser consultado publicamente
	 
	 * Get para visualização do documento
	 *		o utilizador faz ao efectuar o get para o link deve indicar:
	 		  SPAutentikaToken 		
	 * 			
	 * **/
	  return (
		  <div>
		  </div>
	  );
	}
  }
  export default Index;
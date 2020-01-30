import React from 'react';
import Dropzone from '../FileEditor/Dropzone';
import MenuHeader from '../../pages/MenuHeader';
import Footer from '../../pages/Footer';
import Inbox from "./../gerir/Inbox";
import Recebidos from './Recebidos';
import Send from './Send'
class Inicio extends React.Component {

constructor(props){
	super(props);
	this.state = {
		classNameRecebidos:null,
		classNameEnviados:null,
		classNameArquivados:null	
		
	  }
	if(this.props.hearderName=='recebidos')
	   this.state.classNameRecebidos = 'current_page_item'
	if(this.props.hearderName=='enviados')
	   this.state.classNameEnviados = 'current_page_item'
	if(this.props.hearderName=='arquivados')
	   this.state.classNameArquivados = 'current_page_item'
		
}
render() {

	  return (
		  <div>
              <MenuHeader hearderName="gerir"></MenuHeader>
			  <Inbox></Inbox>
              <Footer></Footer>
		  </div>
	  );
	}
  }
  export default Inicio;
import React from 'react';
import Footer from './Footer';
import MenuHeader from './MenuHeader';
import LastAgreements from './LastAgreements';

class Home extends React.Component {
constructor(props){
 super(props);

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
							<h2>Welcome to our website</h2>
							<span className="byline">Mauris vulputate dolor sit amet nibh</span> </div>
							<p><strong>Acordo, </strong>consiste numa plataforma para criação documentos ou declarações escrita
							, com um caracter comprovativo, de forma a garantir a integridade 
							,autenticidade, confidencialidade e não repudio.  </p>
							<a href="/Editor" className="button-p">Propor um acordo</a>
						</div>
						<div id="sidebar">
							<LastAgreements></LastAgreements>
						</div>
				</div>
				<div id="banner-wrapper">
						<div id="banner" className="container">
							<div className="box-left">
							<h2>Mauris vulputate dolor nibh</h2>
							<span>Donec leo, vivamus fermentum praesent urna congue rutrum</span> </div>
							<div className="box-right"> <a href="#" className="button button-big">Etiam posuere</a></div>
						</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	  );
	}
  }
  export default Home;
import React from 'react';
import * as env from '../env';


class Footer extends React.Component {

render() {

	  return (
		<div>
			{/*
			<div id="featured-wrapper">
			  <div id="featured" className="container">
				<div className="major"><br></br>
				  <h2>Tech Stack</h2>
				  <span className="byline">A plataforma acordo utiliza como testemunho a técnologia Blockchain.</span> 
				  <span className="icon icon-hyperledger" />
				  </div>
			  </div>
			</div>
			*/}
		  <div id="copyright" className="container">
			<p>Copyright (c) {env.copyRightYear} {env.appName} All rights reserved. | Design by {env.appName} <a href={env.webUrl} rel="nofollow"></a>.</p>
		  </div>
		</div>
	  );
	}
  }
  export default Footer;
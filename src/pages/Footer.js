import React from 'react';


class Footer extends React.Component {

render() {

	  return (
		<div>
		  
			<div id="featured-wrapper">
			  <div id="featured" className="container">
				<div className="major">
				  <h2>Tech Stack</h2>
				  <span className="byline">A plataforma acordo utiliza como testemunho a técnologia Blockchain.</span> 
				  <span className="icon icon-hyperledger" />
				  </div>
			  </div>
			</div>
			
		  <div id="copyright" className="container">
			<p>Copyright (c) 2020 Acordo.com. All rights reserved. | Design by NOSi EPE<a href="www.nosi.cv" rel="nofollow"></a>.</p>
		  </div>
		</div>
	  );
	}
  }
  export default Footer;
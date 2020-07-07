import React from 'react';
import * as env from '../env';


class Footer extends React.Component {

render() {

	  return (
		<div>
		  <div id="copyright" className="container">
			<p>Copyright (c) {env.copyRightYear} {env.appName} All rights reserved. | Design by {env.appName} <a href={env.webUrl} rel="nofollow"></a>.</p>
		  </div>
		</div>
	  );
	}
  }
  export default Footer;
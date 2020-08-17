import React from 'react';
import * as env from '../env';


class Footer extends React.Component {

render() {

	  return (
		<div>
		  <div id="copyright">
			<p>Copyright (c) {env.copyRightYear} {env.appName} All rights reserved. | Design by <a href={env.webUrl} rel="nofollow">{env.appName}</a></p>
		  </div>
		</div>
	  );
	}
  }
  export default Footer;
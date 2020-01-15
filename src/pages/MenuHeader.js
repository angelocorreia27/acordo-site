import React from 'react';

class MenuHeader extends React.Component {

render() {

	  return (
		  <div id="header-wrapper">
				<div id="header" className="container">
				<div id="logo">
					<h1><a href="#">ACORDO</a></h1>
				</div>
				<div id="menu">
					<ul>
					<li className="current_page_item"><a href="#" accessKey={1} title>Início</a></li>
					<li><a href="#" accessKey={2} title>Gerir</a></li>
					<li><a href="#" accessKey={3} title>Modelo</a></li>
					</ul>
				</div>
				</div>
		  </div>
	  );
	}
  }
  export default MenuHeader;
import React from 'react';

class MenuHeader extends React.Component {
constructor(props){
	super(props)
	this.state = {
		hearderName:null,
		classNameInicio:null,
		classNameGerir:null,
		classNameModelo:null
	  }
	if(this.props.hearderName=='inicio')
	   this.state.classNameInicio = 'current_page_item'
	if(this.props.hearderName=='gerir')
	   this.state.classNameGerir = 'current_page_item'
	if(this.props.hearderName=='modelo')
	   this.state.classNameModelo = 'current_page_item'
}
render() {
	  return (
		  <div id="header-wrapper">
				<div id="header" className="container">
				<div id="logo">
					<h1><a href="/">ACORDO</a></h1>
				</div>
				<div id="menu">
					<ul>
					<li className={this.state.classNameInicio}><a href="/inicio" accessKey={1}>Início</a></li>
					<li className={this.state.classNameGerir}><a href="/gerir" accessKey={2}>Gerir</a></li>
					<li className={this.state.classNameModelo}><a href="/modelo" accessKey={3}>Modelo</a></li>
					</ul>
				</div>
				</div>
		  </div>
	  );
	}
  }
  export default MenuHeader;
import React from 'react';


class home extends React.Component {
constructor(props){
 super(props);

}

render() {

	  return (
		<div>
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
				  { //<li><a href="#" accessKey={4} title>Careers</a></li>
					}
				  {//<li><a href="#" accessKey={5} title>Contact Us</a></li>
					}
				</ul>
			  </div>
			</div>
		  </div>
		  <div id="featured">&nbsp;</div>
		  <div id="wrapper">
			<div id="page" className="container">
			  <div id="content">
				<div className="title">
				<h2>Welcome to our website</h2>
				<span className="byline">Mauris vulputate dolor sit amet nibh</span> </div>
				<p>This is <strong>Uprightness</strong>, a free, fully standards-compliant CSS template designed by <a href="http://www.freecsstemplates.org/" rel="nofollow">FreeCSSTemplates.org</a>. The photos in this template are from <a href="http://fotogrph.com/"> Fotogrph</a>. This free template is released under a <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attributions 3.0</a> license, so you are pretty much free to do whatever you want with it (even use it commercially) provided you keep the links in the footer intact. Aside from that, have fun with it :) </p>
				<a href="/Editor" className="button-p">Propor um acordo</a> </div>
			  <div id="sidebar">
				<div id="stwo-col">
				  <div className="sbox2">
					<h2>Últimos acordos</h2>
					<ul className="style2">
					  <li><a href="#">Semper quis egetmi dolore</a></li>
					  <li><a href="#">Quam turpis feugiat dolor</a></li>
					  <li><a href="#">Amet ornare hendrerit lectus</a></li>
					  <li><a href="#">Consequat lorem phasellus</a></li>
					  <li><a href="#">Amet turpis feugiat amet</a></li>
					</ul>
				  </div>
				  
				</div>
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
			<div id="featured-wrapper">
			  <div id="featured" className="container">
				<div className="major">
				  <h2>Maecenas lectus sapien</h2>
				  <span className="byline">Pellentesque viverra vulputate enim. Aliquam erat volutpat.</span> </div>
				<div className="column1"> <span className="icon icon-gift" />
				  <div className="title">
					<h2>Maecenas lectus sapien</h2>
				  </div>
				  <p>In posuere eleifend odio. Quisque semper augue mattis wisi. Pellentesque viverra vulputate enim. Aliquam erat volutpat.</p>
				</div>
				<div className="column2"> <span className="icon icon-glass" />
				  <div className="title">
					<h2>Praesent scelerisque</h2>
				  </div>
				  <p>In posuere eleifend odio. Quisque semper augue mattis wisi. Pellentesque viverra vulputate enim. Aliquam erat volutpat.</p>
				</div>
				<div className="column3"> <span className="icon icon-music" />
				  <div className="title">
					<h2>Fusce ultrices fringilla</h2>
				  </div>
				  <p>In posuere eleifend odio. Quisque semper augue mattis wisi. Pellentesque viverra vulputate enim. Aliquam erat volutpat.</p>
				</div>
				<div className="column4"> <span className="icon icon-group" />
				  <div className="title">
					<h2>Etiam posuere augue</h2>
				  </div>
				  <p>In posuere eleifend odio. Quisque semper augue mattis wisi. Pellentesque viverra vulputate enim. Aliquam erat volutpat.</p>
				</div>
			  </div>
			</div>
		  </div>
		  <div id="copyright" className="container">
			<p>Copyright (c) 2020 Acordo.com. All rights reserved. | Photos by <a href="http://fotogrph.com/">Fotogrph</a> | Design by <a href="http://www.freecsstemplates.org/" rel="nofollow">FreeCSSTemplates.org</a>.</p>
		  </div>
		</div>
	  );
	}
  }
  export default home;
import React from 'react';
import LastAgreementsFromAPI from '../components/agreements/LastAgreementsFromAPI';

class LastAgreements extends React.Component {

render() {

	  return (
		<div id="stwo-col">
			<div className="sbox2">
				<h2>Últimos acordos</h2>
				<LastAgreementsFromAPI></LastAgreementsFromAPI>
			
				{/*
				<ul className="style2">
				<li><a href="#">Semper quis egetmi dolore</a></li>
				<li><a href="#">Quam turpis feugiat dolor</a></li>
				<li><a href="#">Amet ornare hendrerit lectus</a></li>
				<li><a href="#">Consequat lorem phasellus</a></li>
				<li><a href="#">Amet turpis feugiat amet</a></li>
				</ul>
				*/}
			</div>
		</div>
	  );
	}
  }
  export default LastAgreements;
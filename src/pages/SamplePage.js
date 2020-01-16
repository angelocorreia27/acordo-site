import React from 'react';
import Footer from './Footer';
import MenuHeader from './MenuHeader';
import LastAgreements from './LastAgreements';

class SamplePage extends React.Component {
constructor(props){
 super(props);

}

render() {
	  return (
		<div>
			<MenuHeader></MenuHeader>
			<></>
			<Footer></Footer>
		</div>
	  );
	}
  }
  export default SamplePage;
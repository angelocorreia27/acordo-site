import React from 'react';
import Editor from './Editor';
import MenuHeader from '../../pages/MenuHeader';
import Footer from '../../pages/Footer';

class Inicio extends React.Component {

render() {

	  return (
		  <div>
              <MenuHeader></MenuHeader>
              <Editor></Editor>
              <Footer></Footer>
		  </div>
	  );
	}
  }
  export default Inicio;
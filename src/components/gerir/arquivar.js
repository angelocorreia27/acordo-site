import React from 'react'
import {Button, Form, FormControl, Row, Col, Table} from 'react-bootstrap';
import { Icon, Menu } from 'antd';
import Footer from '../../pages/Footer';
import MenuHeader from '../../pages/MenuHeader';
import { BeatLoader } from "react-spinners";
import axiosHelper from '../helper/axiosHelper';
import * as env from '../../env';


class Arquivar extends React.Component {
    constructor(props){
        super(props);
    
    }

render() {
    
	  return ( 
		<div>
		<MenuHeader hearderName="arquivados"></MenuHeader>
		
		<Footer></Footer>
		</div>
	  )



}


}export default Arquivar;
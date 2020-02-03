import React from 'react'
import {Button, Form, FormControl, Row, Col, Table} from 'react-bootstrap';
import { Icon, Menu } from 'antd';
import Footer from '../../pages/Footer';
import MenuHeader from '../../pages/MenuHeader';
import axiosHelper from '../helper/axiosHelper';
import * as env from '../../env';
import { BeatLoader } from "react-spinners";


class Recebidos extends React.Component {
    constructor(props){
        super(props);
      this.state = {
        loading: true,
        acordos: [],
      }
    }

    render(){
    
	  return (
      <div>
      <MenuHeader hearderName="recebidos"></MenuHeader>
      
      <Footer></Footer>
      </div>
    )

}
}export default Recebidos;
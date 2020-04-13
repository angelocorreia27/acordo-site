import React from 'react';
import {Row, Col, Button } from 'react-bootstrap'
import Logo from '../logo/Logo';
import Search from '../search';

class LogoSearch extends React.Component {
  
    render() {
      return (
            <Row>
                <Col>
                    <Logo/>
                </Col>
                <Col>
                    <Search/>
                </Col>
            </Row> 
      );
    }
  }
  export default LogoSearch;
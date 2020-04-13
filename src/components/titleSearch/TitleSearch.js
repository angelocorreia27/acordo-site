import React from 'react';
import {Row, Col } from 'react-bootstrap'
import Search from '../search';
import Title from '../title/Title';

class TitleSearch extends React.Component {
  
    render() {
      return (
            <Row>
                <Col xs={6}>
                    <Title/>
                </Col>
                <Col xs={6}>
                    <Search/>
                </Col>
            </Row> 
      );
    }
  }
  export default TitleSearch;
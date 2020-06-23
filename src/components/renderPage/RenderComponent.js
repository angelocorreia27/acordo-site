import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import Components from "./components.js";
import axios from 'axios';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/core";
const override = css`
  display: block;
  margin: 0 px;
  margin-left:25%;
  border-color: rgb(7, 172, 238);
`;


var segments = [];
var ff = {};

class RenderComponent extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      structure:[{
        ebit_ff_segment:[],
        ebit_ff:[],
        id:'',
        order:'',
        segmentId:'',
        updatedAt:'',
        createdAt:'',
        loading: true
      }]
    };
  }
  async componentDidMount(){
    const userId = 16;
    
    axios.get('/structure/listff/' + userId +'/' +this.props.name)
    .then(response => {
      console.log(response.data);
      this.setState({structure:response.data.ebit_ff_structures}) ;
    
    // get the flex form
    ff = this.state.structure[0].ebit_ff;
    //console.log(this.state.structure[0].ebit_ff_segment);
    // through the structure and push segment
    var i=0;
    for(i=0 ; i<this.state.structure.length;i++){
      segments.push(this.state.structure[i].ebit_ff_segment);
    }
    })
    .catch(error => {
        console.log(error)
    })
}

  render() {

    return(
      <>
      
      <Card>
            <Card.Header>
                  <Card.Title as="h5">{ff.name}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                  <Col>
                    <Form>
                      <Form.Row>
                      {segments.map(block => Components(block))}
                      </Form.Row>
                    </Form>
                  </Col>
                </Row>
            </Card.Body>
        </Card>
        {!segments[0] && <div><BeatLoader
                               css={override}
                               size={10}
                               color={"#4893e9"}
                               loading={this.state.loading} /></div>
      }
      </>
      
            
    ); 
  }
}

export default RenderComponent;

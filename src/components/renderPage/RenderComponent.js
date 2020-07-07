import React from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import Components from "./Components.js";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/core";
import { Base64 } from 'js-base64';
import authHelper from '../helper/authHelper';
import axiosHelper from '../helper/axiosHelper';
import * as env from '../../env';

const override = css`
  display: block;
  margin: 0 px;
  margin-left:25%;
  border-color: rgb(7, 172, 238);
`;

var ff = {};

class RenderComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      structure: [],
      listSegments: []
    };
    this.changeHandler = this.changeHandler.bind(this);
  }
  async componentDidMount() {
    const token = Base64.encode(await authHelper.getHeaderToken());
    const paramHeaders = {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      }, withCredentials: true
    };
   
    const result = await axiosHelper.axiosGet(env.dataBaseEndPoint + '/structure/listff/' + this.props.name, paramHeaders);
    if (result && result.ebit_ff_structures) {
      const ebit_ff_structures = result.ebit_ff_structures;
      var segments = [];
      for (var i = 0; i < ebit_ff_structures.length; i++) {
        segments.push(ebit_ff_structures[i].ebit_ff_segment);
      }
      this.setState({ structure: ebit_ff_structures, listSegments: segments, loading: false });
      segments = null;
    }

    if (this.state.structure[0] && this.state.structure[0].ebit_ff)
      ff = this.state.structure[0].ebit_ff;

  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log('change handler');
  }

  render() {

    return (
      <>
        <Card>
          <Card.Header>
            <Card.Title as="h5">{ff.name}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Form>
                  <Form.Row key={ff.id}>
                    {this.state.listSegments.map(block =>{
                      const newBlock = block;
                      newBlock.changeHandler = this.changeHandler;
                      return Components(block)
                    })}
                  </Form.Row>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {
          !this.state.listSegments[0] && <div><BeatLoader
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

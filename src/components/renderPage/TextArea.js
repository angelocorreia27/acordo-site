import React from "react";
import {Col, Form} from 'react-bootstrap'; 

export default props => (
  <Form.Group as={Col} sm={6}>
     <Form.Label className="exampleForm.ControlTextarea1">{props.block.name}</Form.Label>
     <Form.Control className="form-control" as="textarea" rows="3" name={props.block.name.replace(' ', '')} value={props.block.value}/>
  </Form.Group>
);
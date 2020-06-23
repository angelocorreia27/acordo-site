import React from "react";
import {Row, Col, Card, Form, Button} from 'react-bootstrap'; 

export default props => (
  <Form.Group as={Col} sm={6}>
     <Form.Label className="input-group-prepend">{props.block.name}</Form.Label>
     <Form.Control className="form-control" type="text" name={props.block.name.replace(' ', '')} value={props.block.value}/>
  </Form.Group>
);
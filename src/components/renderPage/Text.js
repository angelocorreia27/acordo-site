import React from "react";
import {Col, Form} from 'react-bootstrap'; 
import UtilHelper from '../helper/UtilHelper';

export default props => (
  
  <Form.Group as={Col} sm={6}>
     <Form.Label className="input-group-prepend">{UtilHelper.initCatp(props.block.name)}</Form.Label>
     <Form.Control className="form-control" type="text" 
                  name={props.block.name.replace(' ', '')} 
                  defaultValue={props.block.value?props.block.value:''}
                  onChange={props.block.changeHandler}
                  />
  </Form.Group>
);
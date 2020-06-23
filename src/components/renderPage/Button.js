import React from "react";
import {Button} from 'react-bootstrap';
export default props => (
  <div className="button">
    <Button type="submit" variant="primary">{props.block.name}</Button>
  </div>
);
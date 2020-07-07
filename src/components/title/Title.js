import React from 'react';
import Badge from 'react-bootstrap/Badge';
import * as env from '../../env';

class Title extends React.Component {


  render() {
    return (
      <div align="left">
        <h2>
          <Badge variant="secondary">{env.appName}</Badge>
        </h2>
      </div>
    );
  }
}
export default Title;


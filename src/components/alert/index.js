import React from "react";
import Alert from 'react-bootstrap/Alert';

class AlertComp extends React.Component {

    constructor(props){
      super(props);
    }  


    render() {

  
      return (
        <Alert variant={this.props.variant}>
        <Alert.Heading>{this.props.heading}</Alert.Heading>
        <p>
          {this.props.text}
        </p>
        </Alert>
       
      )
    }
  }
    

export default AlertComp;
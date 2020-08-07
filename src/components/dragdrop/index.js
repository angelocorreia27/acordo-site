import '@atlaskit/css-reset';
import React from 'react';
import App from './App';

export default class dragdrop extends React.Component {
  constructor(props) {
    super(props)

  }
  callbackFunction(data) {
    //console.log('data: ', data);
    this.props.parentCallback(data);
  }

  render() {

    return (
      <>
        <App initialState={this.props.data} parentCallback={this.callbackFunction.bind(this)}/>
      </>
    );

  }
}
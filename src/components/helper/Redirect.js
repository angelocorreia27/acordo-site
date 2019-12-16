import React, { Component } from "react";

export class Redirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentWillMount(){
    console.log(this.state.loc);
    window.location = this.state.loc;
  }
  render(){
    return (<section>Redirecting...</section>);
  }
}

export default Redirect;
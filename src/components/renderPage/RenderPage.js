import React from 'react';
import {Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import Components from "./components.js";
import axiosHelper from '../helper/axiosHelper';
import RenderComponent from './RenderComponent';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/core";
const override = css`
  display: block;
  margin: 0 px;
  margin-left:25%;
  border-color: rgb(7, 172, 238);
`;


let ffComponent = [];

class RenderPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      loading: true
  };
  }

  async componentDidMount(){
    const userId = 1;

    let result = await axiosHelper.axiosGet('/commoditie_ff/list/'+this.props.idCommoditie );
    
      ffComponent = result;

      // TODO => Create a handle submit to save in data/store entire form
    /* 1. post to /data/store
         json body: {commoditieId:
                     ffId:}

       2. post to /data/storeData to store entire json from page rendered
       json body: {}
    */

}

  render() {
{
  // loop trhouth data and render all component from commoditie
}
    return(
      <>
      {!ffComponent[0] && <div><BeatLoader
                               css={override}
                               size={10}
                               color={"#4893e9"}
                               loading={this.state.loading} /></div> }
      {ffComponent.length > 0 ? 
      ( 
        <Card>
          <Card.Header>
                <Card.Title as="h5">{ffComponent.name}</Card.Title>
          </Card.Header>
              {
                ffComponent.map(data =>  <RenderComponent> </RenderComponent>)
              }
               
        </Card>
      ):
      (
        <tr>
            <td colSpan={3}></td>
        </tr>
      )
      }
      </>
            
    ); 
  }
}

export default RenderPage;

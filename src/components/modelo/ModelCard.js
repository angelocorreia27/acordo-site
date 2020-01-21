import React from 'react';
import {Card, Button, Table} from 'react-bootstrap';

class ModelCard extends React.Component {
    constructor(props){
       super(props);
       
       }
    
  
    render(){
        return (

<Card bg="dark" text="white" style= {{width: '40rem'}}>
    <Card.Header><h4>Transportation Services Agreement</h4></Card.Header>
    <Card.Body>
      <Card.Title><h6>Client Point of Contact</h6></Card.Title>
      <Card.Text>
    	      <Table>
            <thead>
            <tr>
               [Client.Name]
               <br></br>
               Name<br></br>
               [Client.Street]                [Client.Email]<br></br>
                StreetEmail<br></br>
               [Client.City], [Client.State] [Client.Zip]          [Client.Phone]<br></br>
               City, State, Zip                                     Phone
            </tr>
            </thead>
            </Table>
      </Card.Text>
      <Card.Text></Card.Text>
    </Card.Body>
  </Card>  
  
           )
    
}

}export default ModelCard;
import React from 'react';
import {Card, Button, Table} from 'react-bootstrap';

class ModelCard extends React.Component {
    constructor(props){
       super(props);
       
       }
    
  
    render(){
        return (

<Card bg="dark" text="white" style= {{width: '40rem'}}>
    <Card.Header><h3>Transportation Services Agreement</h3></Card.Header>
    <Card.Body>
      <Card.Title><h6>Client Point of Contact</h6></Card.Title>
      <Card.Text>
    	  
         <Table>
         <tr>
            <th>[Client.Name]</th>
            <th></th>
         </tr>
         <tr>
            <td>Name</td>
            <td></td>
         </tr>
         <tr>
            <td>[Client.Street]</td>
            <td>[Client.Email]</td>
         </tr>
         <tr>
            <td>Street</td>
            <td>Email</td>
         </tr>
         <tr>
            <td>[Client.City], [Client.State] [Client.Zip]</td>
            <td>[Client.Phone]</td>
         </tr>
         <tr>
            <td>City, State, Zip</td>
            <td>Phone</td>
         </tr>
         </Table>

      </Card.Text>
      <Card.Text></Card.Text>
    </Card.Body>
  </Card>  
  
           )
    
}

}export default ModelCard;
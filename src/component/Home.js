import React from 'react';
import { Button, Card, Form} from 'react-bootstrap';


function handleClick() {
    alert('clicked.');
  };
  
const Home = () => {
    
    return(       

 <Card className="text-center" style={{ width:'18rem'}}>
      <Form>

  <Card.Body>
    <Card.Title>
        Drop the documents here to get start</Card.Title>
       
    <Button onClick={this.handleClick}
    id= "foobutton"
    onclick="handleClick()"
    variant="primary">
    Iniciar agora
     </Button>
 
  </Card.Body>
 
  </Form>
</Card>
       );


}
   
  export default Home;


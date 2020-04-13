import React from 'react';
import {Card, Button} from 'react-bootstrap';

class CardModal extends React.Component {

  constructor(props){
    super(props);
   
   }
  render() {
    
    return (
      <>
            <Card style={{ width: '25rem'  }}>
            <Card.Img variant="top" src={this.props.imsSrc} height="200"/>
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                  <Button variant="primary"  href={this.props.buttonAction}>{this.props.button} </Button>
              </Card.Body>
            </Card>
          </>
      )
                
  }
}
export default CardModal;

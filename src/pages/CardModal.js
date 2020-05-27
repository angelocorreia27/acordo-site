import React from 'react';
import {Card, Button} from 'react-bootstrap';

class CardModal extends React.Component {

  constructor(props){
    super(props);
   
   }
  render() {
    const buttonStatus = this.props.buttonStatus;
    console.log('buttonStatus: ', buttonStatus);
    var toRender=null;
    if (buttonStatus==="active"){
      toRender = <Button variant="primary" href={this.props.buttonAction} >{this.props.buttonText} </Button>;
    }
    else{
      toRender = <Button variant="primary" href={this.props.buttonAction} disabled >{this.props.buttonText} </Button>;
    }
    return (
      <>
            <Card style={{ width: '25rem'  }}>
            <Card.Img src={this.props.imsSrc} width="80" height="80"/>
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                  { toRender }
              </Card.Body>
            </Card>
      </>
      )
                
  }
}
export default CardModal;

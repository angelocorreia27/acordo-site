import React, {Component} from "react";
import {Button,ButtonToolbar} from 'react-bootstrap';

class Review extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            iconLoading: false
        };
} 

enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

render(){
    return (
        <div>
<ButtonToolbar>
    <br></br>
                        <Button type= "primary" loading={this.state.loading} onClick={this.enterLoading} size="lg">Documento</Button>
                        <Button type="secondary" loading={this.state.loading} onClick={this.enterLoading} size="lg">Contrato</Button>
                        
</ButtonToolbar>
   

    </div>

      )
    
    }
}
    

export default Review;
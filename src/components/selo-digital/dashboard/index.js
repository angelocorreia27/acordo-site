import React from 'react';
import { Container, Nav, Row, Col } from 'react-bootstrap';
import ListMyBusiness from '../marketplace/ListMyBusiness';
import ListFlexComponent from '../api/ListFlexComponent';
import UtilHelper from '../../helper/UtilHelper';

//import Aux from "../../hoc/_Aux";
//import { DEMO,SELO_DIGITAL } from "../../../store/constant";

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            componentToRender:'APIs', // default active key
            orgId:null,
        };
    }
    componentDidMount(){
        //console.log('orgId: ', this.props);
        const param = UtilHelper.base64ParamDecode(window.location.search);
        const orgId = param.orgId;
        console.log('orgId: ', orgId);
        this.state.orgId = orgId;
        //this.setState({orgId:orgId});
    }
    handleClick(a){
        console.log('action click ', a);
        this.setState({componentToRender:a});
    }
    render() {
        var tabContent = null;
        if(this.state.componentToRender ==='Negócios')
                tabContent = ( <ListMyBusiness orgId={this.state.orgId}/> );
        else if ( this.state.componentToRender ==='APIs')
            tabContent =   (<ListFlexComponent orgId={this.state.orgId}/>);

        return (
            <Container>
                <Row>
                    <Col sm={2}>
                        <Nav className="flex-column">
                            <Nav.Item>
                                <Nav.Link onClick={() => {this.handleClick('APIs')}}>API's</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => {this.handleClick('Negócios')}}>Negócios</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => {this.handleClick('Utilizadores')}}>Utilizadores</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <div className="vr"></div>

                    </Col>
                    <Col>
        <h3 className="title">{this.state.componentToRender}</h3>
                        {tabContent}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Dashboard;
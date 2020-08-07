import React from 'react';
import { Container, Nav, Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';
import ListMyBusiness from '../marketplace/ListMyBusiness';
import CreateAPIFlow from '../api/CreateAPIFlow';
import UtilHelper from '../../helper/UtilHelper';

//import Aux from "../../hoc/_Aux";
import { DEMO,SELO_DIGITAL } from "../../../store/constant";

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            componentToRender:'',
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
            tabContent =   (<CreateAPIFlow orgId={this.state.orgId}/>);

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
                    </Col>
                    <Col>
                        {tabContent}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Dashboard;
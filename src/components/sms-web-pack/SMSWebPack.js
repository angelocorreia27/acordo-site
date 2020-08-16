import React from 'react';
import { Card, Form, Row, Col, Container,Button } from 'react-bootstrap';

class SMSWebPack extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    // send data to parent
     sendData = () => {
        this.props.parentCallback(this.state);
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
        this.sendData();
    }

    render() {
        const { name } = this.state

        return (
            <Container>
                <h5>SMS Web Pack</h5>
                <br/>
            <Row>
                <Button variant="outline-primary" className="button-p" href="#" >Criar API Key</Button>
            </Row>
            <br/>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">API Key</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form ref="APIKey" onSubmit={this.submitHandler} noValidate >
                                <Form.Row>
                                    <Form.Group as={Col} md="4" controlId="formAPIKey">
                                        <Form.Label >Account ID</Form.Label>
                                        <Form.Control type="text"
                                            required
                                            readOnly
                                            name="apiKey"
                                            defaultValue={this.state.apiKey}
                                            />
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="formAuthToken">
                                        <Form.Label >Auth Token</Form.Label>
                                        <Form.Control type="text"
                                            required
                                            readOnly
                                            name="authToken"
                                            defaultValue={this.state.authToken}
                                            />
                                    </Form.Group>

                                </Form.Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br/>
            <h6><a>Read setup instructions</a></h6>
                <br/>
            </Container>

        );
    }
}

export default SMSWebPack;

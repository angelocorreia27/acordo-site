import React from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';


class Customize extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

            name: '',

        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {
        const { name } = this.state

        return (
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Custumização</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Check name="custumizeOpt" inline label="Público" type="radio" id="inline-1-radio" />
                                <Form.Check name="custumizeOpt" inline label="Privado" type="radio" id="inline-2-radio" />
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        );
    }
}

export default Customize;

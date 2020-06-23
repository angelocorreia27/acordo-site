import React from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';


class CSRComponent extends React.Component {

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
                            <Card.Title as="h5">Solicitação de assinatura do certificado</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={this.submitHandler}>

                                <Form.Group controlId="formBasicCommonName">
                                    <Row>
                                        <Form.Label column="lg" lg={2}>Nome comum</Form.Label>
                                        <Col>

                                            <Form.Control type="text"
                                                placeholder="Este é o nome qualificado do seu negócio"
                                                name="commonName"
                                                onChange={this.changeHandler} />
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group controlId="formBasicOrganizationName">
                                    <Row>
                                        <Form.Label column="lg" lg={2}>Nome da organização</Form.Label>
                                        <Col>
                                            <Form.Control type="text"
                                                placeholder="Geralmente, o nome legal de uma empresa e deve incluir sufixos, como Ltd., Inc. ou Corp."
                                                name="organizationName"
                                                onChange={this.changeHandler} />
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group controlId="formBasicOrganizationalUnit">
                                    <Row>
                                        <Form.Label column="lg" lg={2} >Unidade da organização</Form.Label>
                                        <Col>
                                            <Form.Control type="text"
                                                placeholder="por exemplo. RH, Finanças, TI"
                                                name="organizationalUnit"
                                                onChange={this.changeHandler} />
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group controlId="formBasicCity">
                                    <Row>
                                        <Form.Label column="lg" lg={2} >Cidade</Form.Label>
                                        <Col>
                                            <Form.Control type="text"
                                                name="city"
                                                onChange={this.changeHandler} />
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group controlId="formBasicState">
                                    <Row>
                                        <Form.Label column="lg" lg={2} >Província ou região</Form.Label>
                                        <Col>
                                            <Form.Control type="text"
                                                placeholder="Isto não deve ser abreviado, por exemplo: São Vicente, Normandia, Nova Jersey"
                                                name="state"
                                                onChange={this.changeHandler} />
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group controlId="formBasicContry">
                                    <Row>
                                        <Form.Label column="lg" lg={2}>País</Form.Label>
                                        <Col>
                                            <Form.Control type="text"
                                                placeholder="O código ISO de duas letras para o país em que sua organização está localizada. Ex: CV"
                                                name="country"
                                                onChange={this.changeHandler} />
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmailAddress">
                                    <Row>
                                        <Form.Label column="lg" lg={2}>Email</Form.Label>
                                        <Col>
                                            <Form.Control type="text"
                                                name="emailAddress"
                                                onChange={this.changeHandler} />
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        );
    }
}

export default CSRComponent;

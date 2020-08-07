import React from 'react';
import { Card, Form, Row, Col, Container } from 'react-bootstrap';
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';


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
                <h3>SMS notificação</h3>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Pagamento</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <FormWithConstraints ref="pag" onSubmit={this.submitHandler} noValidate >
                                <h5>Dados do pagamento</h5>
                                <Form.Row>
                                    <Form.Group as={Col} md="4" controlId="formEntity">
                                        <Form.Label >Entidade</Form.Label>
                                        <Form.Control type="text"
                                            required
                                            readOnly
                                            placeholder="Entidade"
                                            name="entityCode"
                                            defaultValue={this.state.entityCode}
                                            //onChange={this.changeHandler} 
                                            />
                                        <FieldFeedbacks for="entityCode">
                                            <FieldFeedback when="valueMissing">Por favor a Entidade!</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="formReference">
                                        <Form.Label >Referência</Form.Label>
                                        <Form.Control type="text"
                                            required
                                            readOnly
                                            placeholder="Referência"
                                            name="referenceNumber"
                                            defaultValue={this.state.referenceNumber}
                                            //onChange={this.props.changeHandler} 
                                            />
                                        <FieldFeedbacks for="referenceNumber">
                                            <FieldFeedback when="valueMissing">Por favor a Referência!</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="formValue">
                                        <Form.Label  >Valor</Form.Label>
                                        <Form.Control type="text"
                                            required
                                            readOnly
                                            placeholder="Valor"
                                            name="amount"
                                            defaultValue={this.state.amount}
                                            //onChange={this.props.changeHandler} 
                                            />
                                        <FieldFeedbacks for="amount">
                                            <FieldFeedback when="valueMissing">Por favor o Valor!</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Form.Group>
                                </Form.Row>
                                <br />
                                <h5>Dados do cartão</h5>
                                <Form.Row>
                                    <Form.Group as={Col} md="4" controlId="formName">
                                        <Form.Label>Nome</Form.Label>
                                        <Form.Control type="text"
                                            required
                                            name="name"
                                            value={this.state.name?this.state.name:''}
                                            onChange={this.changeHandler} 
                                            />
                                        <FieldFeedbacks for="name">
                                            <FieldFeedback when="valueMissing">Por favor o Nome!</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="formNumber">
                                        <Form.Label >Número cartão</Form.Label>
                                        <Form.Control type="text"
                                            required
                                            placeholder="Número do cartão"
                                            name="pan"
                                            value={this.state.pan?this.state.pan:''}
                                            onChange={this.changeHandler} />
                                        <FieldFeedbacks for="pan">
                                            <FieldFeedback when="valueMissing">Por favor o Número do cartão!</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="formMonthExpiration">
                                        <Form.Label >Mês expiração</Form.Label>
                                        <Form.Control type="text"
                                            required maxLength={2} minLength={2}
                                            placeholder="Mês de expiração"
                                            name="dateMonth"
                                            value={this.state.dateMonth?this.state.dateMonth:''}
                                            onChange={this.changeHandler} />
                                        <FieldFeedbacks for="dateMonth">
                                            <FieldFeedback when="valueMissing">Por favor Mẽs expiração!</FieldFeedback>
                                            <FieldFeedback when="patternMismatch">Mês expiração deve ter dois Caracteres!</FieldFeedback>
                                            <FieldFeedback when={value => !/[A-Z]/.test(value)} warning>Deve ter números</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="formYearExpiration">
                                        <Form.Label >Ano expiração</Form.Label>
                                        <Form.Control type="text"
                                            required
                                            name="dateYear"
                                            value={this.state.dateYear?this.state.dateYear:''}
                                            onChange={this.changeHandler} />
                                        <FieldFeedbacks for="dateYear">
                                            <FieldFeedback when={value => !/\S+@\S+/.test(value)}>Endereço de Email inválido!.</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="formCVV2">
                                        <Form.Label >CVV2</Form.Label>
                                        <Form.Control type="text"
                                            required
                                            name="cvv2"
                                            value={this.state.cvv2?this.state.cvv2:''}
                                            onChange={this.changeHandler} />
                                        <FieldFeedbacks for="cvv2">
                                            <FieldFeedback when={value => !/\S+@\S+/.test(value)}>CVV2 inválido!.</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Form.Group>
                                </Form.Row>
                            </FormWithConstraints>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>

        );
    }
}

export default SMSWebPack;

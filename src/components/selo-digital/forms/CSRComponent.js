import React from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';


class CSRComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            from:"CSR",
            commonName: '',
            organizationName: '',
            organizationalUnit: '',
            city: '',
            state: '',
            country: '',
            emailAddress: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.sendData = this.sendData.bind(this);
    }
    componentDidMount(){
        if (this.props.CSR.commonName)
            this.setState({commonName:this.props.CSR.commonName,
                           organizationName:this.props.CSR.organizationName,
                           organizationalUnit:this.props.CSR.organizationalUnit,
                           city:this.props.CSR.city,
                           state:this.props.CSR.state,
                           country:this.props.CSR.country,
                           emailAddress:this.props.CSR.emailAddress  
                    });
    }

    componentDidUpdate(prevProps, prevState) {
        const { submitFromOutside } = this.props;
        if (submitFromOutside)
            this.submitHandler();

    }

    async submitHandler() {

        // Validate
        this.refs.formCSR.resetFields();
        await this.refs.formCSR.validateForm();
        if (this.refs.formCSR.isValid())
            this.sendData();

    }

    // send data to parent
    sendData = () => {
        this.props.parentCallback(this.state);
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    blurHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
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
                            <FormWithConstraints ref="formCSR" onSubmit={this.submitHandler} noValidate >

                                <Form.Group controlId="formBasicCommonName">
                                    <Row>
                                        <Form.Label column="lg" lg={2}>Nome comum</Form.Label>
                                        <Col>
                                            <Form.Control type="text"
                                                required
                                                placeholder="Este é o nome qualificado do seu negócio"
                                                name="commonName"
                                                value={this.state.commonName}
                                                onChange={this.blurHandler} />
                                        </Col>
                                        <FieldFeedbacks for="commonName">
                                                <FieldFeedback when="valueMissing">Por favor o Nome comum!</FieldFeedback>
                                            </FieldFeedbacks>
                                    </Row>
                                </Form.Group>
                                
                                <Form.Group controlId="formBasicOrganizationName">
                                    <Row>
                                        <Form.Label column="lg" lg={2}>Nome da organização</Form.Label>
                                        <Col>
                                            <Form.Control type="text"
                                                required
                                                placeholder="Geralmente, o nome legal de uma empresa e deve incluir sufixos, como Ltd., Inc. ou Corp."
                                                name="organizationName"
                                                value={this.state.organizationName}
                                                onChange={this.blurHandler} />
                                            <FieldFeedbacks for="organizationName">
                                                <FieldFeedback when="valueMissing">Por favor o Nome da organização!</FieldFeedback>
                                            </FieldFeedbacks>
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group controlId="formBasicOrganizationalUnit">
                                    <Row>
                                        <Form.Label column="lg" lg={2} >Unidade da organização</Form.Label>
                                        <Col>
                                            <Form.Control type="text"
                                                required
                                                placeholder="por exemplo. RH, Finanças, TI"
                                                name="organizationalUnit"
                                                value={this.state.organizationalUnit}
                                                onChange={this.blurHandler} />
                                            <FieldFeedbacks for="organizationalUnit">
                                                <FieldFeedback when="valueMissing">Por favor introduza a Unidade da organização!</FieldFeedback>
                                            </FieldFeedbacks>
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group controlId="formBasicCity">
                                    <Row>
                                        <Form.Label column="lg" lg={2} >Cidade</Form.Label>
                                        <Col>
                                            <Form.Control type="text"
                                                required
                                                name="city"
                                                value={this.state.city}
                                                onChange={this.blurHandler} />
                                            <FieldFeedbacks for="city">
                                                <FieldFeedback when="valueMissing">Por favor introduza a Cidade!</FieldFeedback>
                                            </FieldFeedbacks>
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group controlId="formBasicState">
                                    <Row>
                                        <Form.Label column="lg" lg={2} >Província ou região</Form.Label>
                                        <Col>
                                            <Form.Control type="text"
                                                required
                                                placeholder="Isto não deve ser abreviado, por exemplo: São Vicente, Normandia, Nova Jersey"
                                                name="state"
                                                value={this.state.state}
                                                onChange={this.blurHandler} />
                                            <FieldFeedbacks for="state">
                                                <FieldFeedback when="valueMissing">Por favor introduza a Província ou região!</FieldFeedback>
                                            </FieldFeedbacks>
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group controlId="formBasicContry">
                                    <Row>
                                        <Form.Label column="lg" lg={2}>País</Form.Label>
                                        <Col>
                                            <Form.Control type="text"
                                                required maxLength={2} minLength={2}
                                                placeholder="O código ISO de duas letras para o país em que sua organização está localizada. Ex: CV"
                                                name="country"
                                                value={this.state.country}
                                                onChange={this.blurHandler} />
                                            <FieldFeedbacks for="country">
                                                <FieldFeedback when="valueMissing">Por favor introduza País!</FieldFeedback>
                                                <FieldFeedback when="patternMismatch">País deve ter dois Caracteres!</FieldFeedback>
                                                <FieldFeedback when={value => !/[A-Z]/.test(value)} warning>Deve ter letra em mauísculo</FieldFeedback>
                                            </FieldFeedbacks>
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmailAddress">
                                    <Row>
                                        <Form.Label column="lg" lg={2}>Email</Form.Label>
                                        <Col>
                                            <Form.Control type="text"
                                                required
                                                name="emailAddress"
                                                value={this.state.emailAddress}
                                                onChange={this.blurHandler} />
                                            <FieldFeedbacks for="emailAddress">
                                                <FieldFeedback when={value => !/\S+@\S+/.test(value)}>Endereço de Email inválido!.</FieldFeedback>
                                            </FieldFeedbacks>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </FormWithConstraints>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        );
    }
}

export default CSRComponent;

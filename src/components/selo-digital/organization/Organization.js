import React from 'react';
import { Button, Card, Form, Row, Col } from 'react-bootstrap';
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';
import axiosHelper from '../../helper/axiosHelper';
import authHelper from '../../helper/authHelper';
import * as env from '../../../env';

class Organization extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
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
        // this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.sendData = this.sendData.bind(this);
    }
    /* componentDidMount(){
        if (this.props.CSR.commonName)
            this.setState({commonName:this.props.CSR.commonName,
                           organizationName:this.props.CSR.organizationName,
                           organizationalUnit:this.props.CSR.organizationalUnit,
                           city:this.props.CSR.city,
                           state:this.props.CSR.state,
                           country:this.props.CSR.country,
                           emailAddress:this.props.CSR.emailAddress  
                    });
    } */

    /* componentDidUpdate(prevProps, prevState) {
        const { submitFromOutside } = this.props;
        if (submitFromOutside)
            this.submitHandler();

    } */

    async submitHandler() {

        // Validate
        if(await this.validation()){
            const paramHeaders = await authHelper.getHeaderWithToken();
            console.log('state: ', this.state);
            // save organization
            const organization = await axiosHelper.axiosPost(env.dataBaseEndPoint + '/organization/store', this.state, paramHeaders);
            // save organization first user
            console.log('organization: ', organization);
            var organization_user = {organizationId:organization.ebit_organizations.id, role:'Admin'}; 
            console.log('organization_user: ', organization_user);
            organization_user = await axiosHelper.axiosPost(env.dataBaseEndPoint + '/organization_user/store', organization_user, paramHeaders);
            console.log('organization_user: ', organization_user);
            this.sendData();
        }

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

    async validation() {
        this.refs.formCSR.resetFields();
        await this.refs.formCSR.validateForm();
        return this.refs.formCSR.isValid();
           
    }

    render() {
        return (
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Nova organização (CSR)</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <FormWithConstraints ref="formCSR" onSubmit={this.submitHandler} noValidate >

                                <Form.Group controlId="formBasicCommonName">
                                    <Form.Label >Nome comum</Form.Label>
                                    <Form.Control type="text"
                                        required
                                        placeholder="Este é o nome qualificado do seu negócio"
                                        name="commonName"
                                        value={this.state.commonName}
                                        onChange={this.blurHandler} />
                                    <FieldFeedbacks for="commonName">
                                        <FieldFeedback when="valueMissing">Por favor o Nome comum!</FieldFeedback>
                                    </FieldFeedbacks>

                                </Form.Group>

                                <Form.Group controlId="formBasicOrganizationName">
                                    <Form.Label >Nome da organização</Form.Label>
                                    <Form.Control type="text"
                                        required
                                        placeholder="Geralmente, o nome legal de uma empresa e deve incluir sufixos, como Ltd., Inc. ou Corp."
                                        name="organizationName"
                                        value={this.state.organizationName}
                                        onChange={this.blurHandler} />
                                    <FieldFeedbacks for="organizationName">
                                        <FieldFeedback when="valueMissing">Por favor o Nome da organização!</FieldFeedback>
                                    </FieldFeedbacks>
                                </Form.Group>

                                <Form.Group controlId="formBasicOrganizationalUnit">
                                    <Form.Label >Unidade da organização</Form.Label>
                                    <Form.Control type="text"
                                        required
                                        placeholder="por exemplo. RH, Finanças, TI"
                                        name="organizationalUnit"
                                        value={this.state.organizationalUnit}
                                        onChange={this.blurHandler} />
                                    <FieldFeedbacks for="organizationalUnit">
                                        <FieldFeedback when="valueMissing">Por favor introduza a Unidade da organização!</FieldFeedback>
                                    </FieldFeedbacks>
                                </Form.Group>

                                <Form.Group controlId="formBasicCity">
                                    <Form.Label >Cidade</Form.Label>
                                    <Form.Control type="text"
                                        required
                                        name="city"
                                        value={this.state.city}
                                        onChange={this.blurHandler} />
                                    <FieldFeedbacks for="city">
                                        <FieldFeedback when="valueMissing">Por favor introduza a Cidade!</FieldFeedback>
                                    </FieldFeedbacks>
                                </Form.Group>

                                <Form.Group controlId="formBasicState">
                                    <Form.Label >Província ou região</Form.Label>
                                    <Form.Control type="text"
                                        required
                                        placeholder="Isto não deve ser abreviado, por exemplo: São Vicente, Normandia, Nova Jersey"
                                        name="state"
                                        value={this.state.state}
                                        onChange={this.blurHandler} />
                                    <FieldFeedbacks for="state">
                                        <FieldFeedback when="valueMissing">Por favor introduza a Província ou região!</FieldFeedback>
                                    </FieldFeedbacks>
                                </Form.Group>

                                <Form.Group controlId="formBasicContry">
                                    <Form.Label >País</Form.Label>
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
                                </Form.Group>

                                <Form.Group controlId="formBasicEmailAddress">
                                    <Form.Label >Email</Form.Label>
                                    <Form.Control type="text"
                                        required
                                        name="emailAddress"
                                        value={this.state.emailAddress}
                                        onChange={this.blurHandler} />
                                    <FieldFeedbacks for="emailAddress">
                                        <FieldFeedback when={value => !/\S+@\S+/.test(value)}>Endereço de Email inválido!.</FieldFeedback>
                                    </FieldFeedbacks>
                                </Form.Group>
                            </FormWithConstraints>
                        </Card.Body>
                        
                    </Card>
                    <Card>
                            <Card.Body>
                                <Row>
                                    <Col >
                                        <Button className="button-right" variant="outline-primary" onClick={this.submitHandler} >
                                            Gravar
                                    </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                </Col>
            </Row>

        );
    }
}

export default Organization;

import React from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';

class Customize extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            from:"customize",
            networkOpt: '',
            networkName: ''
        }
        this.privateName = this.privateName.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.sendData = this.sendData.bind(this);
    }
    componentDidMount(){
        if (this.props.customize)
            this.setState({networkOpt:this.props.customize.networkOpt,networkName:this.props.customize.networkName });
    }
    componentDidUpdate(prevProps, prevState) {
        
        const { submitFromOutside } = this.props;
        if (submitFromOutside) 
            this.submitHandler(); 
    }

    async submitHandler() {
        // Validate
        this.refs.form.resetFields();
        await this.refs.form.validateForm();
        if (this.refs.form.isValid())
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

    privateName(props) {
        return (
            <button onClick={props.onClick}>
                Login
            </button>
        );
    }

    render() {
        var checkedOptPub = false;
        var checkedOptPri = false;
        if (this.state.networkOpt==='public')
            checkedOptPub=true;
        if (this.state.networkOpt==='private')
            checkedOptPri=true;
            
        var compTorender = null;
        if (this.state.networkOpt === 'private') {
            compTorender = <><Form.Group controlId="formBasicNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text"
                    required maxLength={10}
                    name="networkName"
                    defaultValue={this.state.networkName}
                    onBlur={this.blurHandler} />
            </Form.Group>
            <FieldFeedbacks for="networkName">
            <FieldFeedback when="valueMissing">Por favor preecha o campo!</FieldFeedback>
            </FieldFeedbacks></>
        }
        return (
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Definição da rede</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <FormWithConstraints ref="form" onSubmit={this.submitHandler} noValidate >
                                <Form.Check required name="networkOpt" inline label="Público" type="radio" id="inline-1-radio" value="public" onChange={this.changeHandler} checked={checkedOptPub}/>
                                <Form.Check required name="networkOpt" inline label="Privado" type="radio" id="inline-2-radio" value="private" onChange={this.changeHandler} checked={checkedOptPri}/>
                                <FieldFeedbacks for="networkOpt">
                                <FieldFeedback when="valueMissing">Por favor escolha uma opção!</FieldFeedback>
                                </FieldFeedbacks>
                                {compTorender}
                            </FormWithConstraints>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        );
    }
}

export default Customize;

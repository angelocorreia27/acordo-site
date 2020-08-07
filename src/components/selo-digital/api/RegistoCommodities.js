import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';

class RegistoCommodities extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: 0,
            networkType: '',
            description: '',
            image: null
        }
    }

    sendData = () => {
        this.props.parentCallback(this.state);
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
        this.sendData();
    }

    handleImageChange = (e) => {

        this.state.image = e.target.files[0];
        this.sendData();
    }

    render() {
        const { name, price, description, networkType } = this.state
        console.log('componentType:: ', networkType);
        var checkedTypePubl = false;
        var checkedTypePrivInHouse = false;
        var checkedTypePrivCloud = false;
        if (networkType === 'public')
            checkedTypePubl = true;
        if (networkType === 'privateCloud')
            checkedTypePrivCloud = true;
        if (networkType === 'privateInHouse')
            checkedTypePrivInHouse = true;

        return (
            <Row>
                <Col >
                    <FormWithConstraints ref={this.props.sref} noValidate>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formOrList">
                                <Form.Label > API acessível</Form.Label>
                                <fieldset>
                                    <Col sm={10}>
                                        <Form.Check required name="networkType" inline label="Público" type="radio" id="inline-1-radio" value="public" onChange={this.changeHandler} checked={checkedTypePubl} />
                                        <Form.Check required name="networkType" inline label="Privado (com node interno)" type="radio" id="inline-2-radio" value="privateInHouse" onChange={this.changeHandler} checked={checkedTypePrivInHouse} />
                                        <Form.Check required name="networkType" inline label="Privado (com node na cloud)" type="radio" id="inline-3-radio" value="privateCloud" onChange={this.changeHandler} checked={checkedTypePrivCloud} />
                                        <FieldFeedbacks for="networkType">
                                            <FieldFeedback when="valueMissing">Por favor escolha uma opção!</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Col>
                                </fieldset>

                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicNome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text"
                                    placeholder=""
                                    name="name" value={name}
                                    required
                                    onChange={this.changeHandler} />
                                <FieldFeedbacks for="name">
                                    <FieldFeedback when="valueMissing">Por favor o Nome!</FieldFeedback>
                                </FieldFeedbacks>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formBasicDescription">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control type="textarea"
                                    name="description" value={description}
                                    placeholder=""
                                    required
                                    onChange={this.changeHandler}
                                />
                                <FieldFeedbacks for="description">
                                    <FieldFeedback when="valueMissing">Por favor a Descrição!</FieldFeedback>
                                </FieldFeedbacks>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicImagem">
                                <Form.Label>Imagem</Form.Label>
                                <Form.Control type="file"
                                    name="image"
                                    accept="image/png, image/jpeg"
                                    placeholder=""
                                    onChange={this.handleImageChange} required />
                            </Form.Group>
                        </Form.Row>
                    </FormWithConstraints>
                </Col>
            </Row>
        );
    }
}
export default RegistoCommodities;
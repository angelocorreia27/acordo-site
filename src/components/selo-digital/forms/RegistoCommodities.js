import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';

class RegistoCommodities extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: 0,
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
        const { name, price, description } = this.state


        return (
            <Row>
                <Col >
                    <FormWithConstraints ref={this.props.sref} noValidate>
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
                            {/* <Form.Group controlId="formBasicPrice">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control type="text"
                                placeholder=""
                                name="price" value={price}
                                onChange={this.changeHandler} />
                        </Form.Group> */}
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
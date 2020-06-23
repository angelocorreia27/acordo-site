import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

class RegistoCommodities extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: '',
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
                    <Form >
                        <Form.Group controlId="formBasicNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text"
                                placeholder=""
                                name="name" value={name}
                                onChange={this.changeHandler} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPrice">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control type="text"
                                placeholder=""
                                name="price" value={price}
                                onChange={this.changeHandler} />
                        </Form.Group>

                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control type="textarea"
                                name="description" value={description}
                                placeholder=""
                                onChange={this.changeHandler}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicImagem">
                            <Form.Label>Imagem</Form.Label>
                            <Form.Control type="file"
                                name="image"
                                accept="image/png, image/jpeg"
                                placeholder=""
                                onChange={this.handleImageChange} required />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        );
    }
}
export default RegistoCommodities;
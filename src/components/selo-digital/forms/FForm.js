import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';

//import { thisExpression } from '@babel/types';


class FForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            
            name: '',
            
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
        this.props.parentCallback(this.state);
    }


    render() {
        const { name } = this.state

        return (
            <Row>
            <Col>
            <Form onSubmit={this.submitHandler}>
                <Form.Group controlId="formBasicNome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text"
                        placeholder="Entre nome do formulário"
                        name="name" value={name}
                        onChange={this.changeHandler} />

                </Form.Group>
            </Form>
            </Col>
            </Row>


        );
    }
}

export default FForm;

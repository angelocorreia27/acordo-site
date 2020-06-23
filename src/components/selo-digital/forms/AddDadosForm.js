import React, { useState, setState} from 'react';
import { Form, Button, Col } from 'react-bootstrap';
//import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
//import axios from 'axios';


const AddDadosForm = props => {
    const initialFormState = { id: null, name: '', value: '', component: '', userId: '1', validationId: '1' }
    const [dados, setDados] = useState(initialFormState)

    const handleInputChange = e => {
        const { name, value } = e.target
        setDados({ ...dados, [name]: value, [value]: value })

    }

    const [loading, setLoading] = useState(false);
    console.log('loading', loading);
    const Loading = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }

    return (

        <Form.Row
            onSubmit={e => {
                e.preventDefault()
                if (!dados.name || !dados.value)
                    return
                props.addDados(dados)

            }}>
            <Col md={6} >

                <Form.Group >
                    <Form.Label className="mb-2 mr-5">Nome</Form.Label>
                    <Form.Control id="campo1" className="mb-2 mr-5" type="text" name="name" value={dados.name} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group >
                    <Form.Label className="mb-2 mr-5">Valor defeito</Form.Label>
                    <Form.Control id="campo2" type="text" name="value" value={dados.value} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group>
                    <Button variant="outline-primary" className="btn pull-right" type="submit"  onClick={() => { props.addDados(dados) }} disabled={loading}>
                        {loading && (
                            <i
                                className="fa fa-refresh fa-spin"
                                style={{ marginRight: "5px" }}
                            />
                        )}
                        {loading && <span>Adding</span>}
                        Add
                    </Button>
                </Form.Group>

            </Col>
        </Form.Row>


    )
}

export default AddDadosForm

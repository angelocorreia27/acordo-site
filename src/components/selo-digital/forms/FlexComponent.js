import React, { useState, Fragment } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import FForm from "./FForm";
import SegmentStructure from "./SegmentStructure";
import AddDadosForm from './AddDadosForm';
import EditDadosForm from './EditDadosForm';
import axiosHelper from '../../helper/axiosHelper';


const FlexComponent = (props) => {

    //FFormData
    const FForms = [{ name: '' }]
    var [FFormData, setFFormData] = useState(FForms)
    var storedSegment = []

    //StructureDados
    const structureData = [{ id: null, name: '', value: '', component: '', userId: '1', validationId: '' }]

    const initialFormState = { id: null, name: '', value: '' }

    //Setting
    const [Dados, setDados] = useState(structureData)
    const [currentDados, setCurrentDados] = useState(initialFormState)
    const [editing, setEditing] = useState(false)
    const [structure, setStructure] = useState(structureData)
    

    //add data to list Operations
    const addDados = dados => {
       
        if (dados.id == null) {
            dados.id = Dados.length
            updateDados(null, dados)
            dados.id = dados.id + 1
        }
        else {
            setDados([...Dados, dados])
            dados.id = dados.id + 1
        }
       
    }

    const addChangedValues = dados => {
        setStructure([dados])
    }

    const deleteDados = id => {
        setEditing(false)
        setDados(Dados.filter(dados => dados.id !== id))
    }

    const updateDados = (id, updateDados) => {
        setEditing(false)

        setDados(Dados.map(dados => (dados.id === id ? updateDados : dados)))
    }

    const editRow = dados => {
        setEditing(true)
        setCurrentDados({ id: dados.id, name: dados.name, value: dados.value })
    }

    // Callback the data inserted in FForm
    const callbackFunctionI = (FFormData) => {
        setFFormData(FFormData)
    }

    // submit for all data  \\
    const submitHandler  = e => {
        e.preventDefault()

        const paramHeaders = {headers: { 'Accept': 'application/json'}, withCredentials: true};


        const resultFF =  axiosHelper.axiosPost('/ff/store', FFormData, paramHeaders);

        resultFF.then(function (data) {
            setFFormData(data)
            FFormData.id = data.id;
            console.log('Form save result ', FFormData);
        })

        var segment = []
        for (var i = 0; i < structure.length; i++) {
            // push only attributes that have values
            var obj = {};
            if (structure[i].name != "")
                obj["name"] = structure[i].name
            if (structure[i].value != "")
                obj["value"] = structure[i].value
            if (structure[i].component != "")
                obj["component"] = structure[i].component
            if (structure[i].validationId != "")
                obj["validationId"] = structure[i].validationId

            segment.push(obj);

        }

        var ebit_structures = []

        var struct = [];

        const resultSegment =  axiosHelper.axiosPost('/segment/bulkStore', segment, paramHeaders);

        resultSegment.then(function (data) {
            storedSegment = data.ebit_ff_segments;
            console.log('Segment save result ', storedSegment);

            for (var i = 0; i < storedSegment.length; i++) {
                ebit_structures.push({ segmentId: storedSegment[i].id, ffId: FFormData.id, order: i });
            }


            const resultStructure =  axiosHelper.axiosPost('/structure/bulkStore', ebit_structures, paramHeaders);
            resultStructure.then(function (data) {
                struct = data;
                console.log('Structure save result ', struct);
            })
        })

    }

    return (
        <Container>
            <Row>
                <Col>
                    <Card>

                        <div  className="Pagecenter">
                        <Card>  
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Componentes</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <FForm parentCallback={callbackFunctionI.bind(this)} />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Lista Input</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <div className="flex-row">
                                            <div className="flex-large">
                                                {editing ? (
                                                    <Fragment>
                                                        <EditDadosForm
                                                            editing={editing}
                                                            setEditing={setEditing}
                                                            currentDados={currentDados}
                                                            updateDados={updateDados}
                                                        />
                                                    </Fragment>
                                                ) : (
                                                        <Fragment>
                                                            <AddDadosForm addDados={addDados} />
                                                        </Fragment>
                                                    )}
                                            </div>
                                            <div className="flex-large">
                                                <Fragment>
                                                    <br></br><br></br><br></br>
                                                    <SegmentStructure Dados={Dados} addChangedValues={addChangedValues} editRow={editRow} deleteDados={deleteDados} />
                                                </Fragment>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col >
                                        <Button className="btn pull-right" type="submit" variant="outline-primary" onClick={submitHandler} >
                                            Confirmar
                                    </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Card>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default FlexComponent;
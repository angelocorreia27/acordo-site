import React, { useState } from 'react';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import RegistoCommodities from './RegistoCommodities';
import TableFF from './TableFF';
import axiosHelper from '../../helper/axiosHelper';


const FlexForm = () => {

    const commoditiesData = [
        {
            id: null,
            name: '',
            price: '',
            description: '',
            image: '',
            userId: null,
        }]

    var [commoditieData, setcommoditieData] = useState(commoditiesData)


    var listFf = []


    var [ListFfData, setListFfData] = useState(listFf)


    // const commoditie_FF = '';
    var commoditie_FF = []

    // Callback the data inserted in RegistoCommodite
    const callbackFunction = (commoditieData) => {
        setcommoditieData(commoditieData)
    }

    // Callback the data inserted in TableFF
    const callbackFunctionII = (ListFfData) => {
        setListFfData(ListFfData)

    }

    const submitHandler = async e => {

        e.preventDefault()

        const paramHeaders = { headers: { 'Accept': 'application/json'}, withCredentials: true };

        const data = new FormData();
        data.append('name', commoditieData.name); // id do utilizador em sessao
        data.append('price', commoditieData.price);
        data.append('description', commoditieData.description);
        data.append('fileData', commoditieData.image);

        const resultCommoditie = await axiosHelper.axiosPost('/commoditie/store', data, paramHeaders);
        console.log('commoditie save result ', resultCommoditie.ebit_commodities);
        console.log('ListFfData ', ListFfData);
        for (var i = 0; i < ListFfData.length; i++) {

            commoditie_FF.push({ commoditieId: resultCommoditie.ebit_commodities.id, ffId: ListFfData[i].id });

        }

        console.log('commoditie_FF', commoditie_FF);

        let result = await axiosHelper.axiosPost('/commoditie_ff/bulkStore', commoditie_FF, paramHeaders);
        console.log('result', result);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <div className="Pagecenter">
                            <Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Formulário</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <RegistoCommodities parentCallback={callbackFunction.bind(this)} />
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <TableFF parentCallback={callbackFunctionII.bind(this)} />
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>

                                <Card>
                                    <Card.Body>
                                        <Row>
                                            <Col >
                                                <Button className="btn pull-right" type="submit" variant="outline-primary" onClick={submitHandler}>
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
        </Container >
    )

}
export default FlexForm;
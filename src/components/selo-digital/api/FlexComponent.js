import React, { useState, Fragment, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

import axiosHelper from '../../helper/axiosHelper';
import authHelper from '../../helper/authHelper';
import * as env from '../../../env';
import { Base64 } from 'js-base64';
import componentData from './componentData';
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';

class FlexComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            componentName: '',
            componentType: '',
            componentListLoadFrom: '',
            segment: [{ name: '', value: '', component: '' }],
            structure: [],
            orgId:''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.addData = this.addData.bind(this);
        this.handlerDelete = this.handlerDelete.bind(this);
        this.validate = this.validate.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.loadStrutureList = this.loadStrutureList.bind(this);
        this.componentListLoadFromChange = this.componentListLoadFromChange.bind(this);

    }

    componentDidMount() {
        //const { submitFromOutside } = this.props;
        this.state.orgId = this.props.orgId;
        // load structure when editing
        const loadData = async (ffId) => {
            const token = Base64.encode(await authHelper.getHeaderToken());
            const paramHeaders = {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                }, withCredentials: true
            };

            const seg = await this.loadStrutureList(ffId, paramHeaders);
            this.setState({ segment: seg });

        }
        if (this.props.editing) {
            this.setState({ id: this.props.fformData.id, 
                                componentName: this.props.fformData.name, 
                                componentType:this.props.fformData.type, 
                                componentListLoadFrom:this.props.fformData.loadFrom });

            const seg = loadData(this.props.fformData.id);
        }
    };

    //add data to list Operations
    addData = (newData) => {
        const data = this.state.segment
        data.push(newData);
        this.setState({ segment: data });
    }
    // delete element from list
    handlerDelete = (i) => {
        //this.setState({ segment: data });
        document.getElementById("row" + i).remove();
        this.state.segment.splice(i, 1);
    }
    // handle input change
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log('state: ', this.state);
    }

    // send data to parent
    sendData = () => {
        this.props.parentCallback(this.state.structure);
    }
    // load structure when editing
    async loadStrutureList(ffId, paramHeaders) {
        const result = await axiosHelper.axiosGet(env.dataBaseEndPoint + '/structure/list/' + ffId + '/', paramHeaders);
        // ebit_ff_segment
        var seg = [];
        console.log('result ', result);
        if (result && result.ebit_ff_structures) {
            const struct = result.ebit_ff_structures;
            console.log('struct: ', struct);
            for (var i = 0; i < struct.length; i++) {
                console.log('ebit_ff_segment: ', struct[i].ebit_ff_segment);
                var obj = struct[i].ebit_ff_segment;
                seg.push(obj);
            }
            console.log('seg: ', seg);
        }
        return seg;
    }
    // validate form
    async validate() {
        let validated = true;
        // validate this form
        await this.refs.fform.resetFields();
        await this.refs.fform.validateForm();
        for (var i = 0; i < this.state.segment.length; i++) {

            if (this.state.segment[i].component === undefined 
                || this.state.segment[i].name === "") {
                validated = false;
                this.setState({showMessageComp:true});
            }
        }
        if (!await this.refs.fform.isValid())
            validated = false;

        return validated;
    }
    // handle componentListLoadFrom change
    // endpoint for test
    // https://jsonplaceholder.typicode.com/   
    componentListLoadFromChange = async (e) => {
        const paramHeaders = {
            headers: {
                'Accept': 'application/json'
            }, withCredentials: true
        };
        // get data from URL
        const result = await axiosHelper.axiosGet(this.state.componentListLoadFrom, paramHeaders);
        console.log('result: ', result);
        var objectPropertie = null;
        if (result) {
            if (result.length > 0) {
                objectPropertie = result[0]; // its a list, get the firs element
            } else {
                objectPropertie = result; // its a json object
            }

            var objArray = [];
            for (var propt in objectPropertie) {
                const obj = {};
                console.log(propt + ': ' + objectPropertie[propt]);
                obj.name = propt;
                obj.value = objectPropertie[propt].toString();
                obj.component = "Col";
                objArray.push(obj);
            }
            console.log('objArray: ', objArray);

            // fill list with data resulted tag name
            if (objArray.length > 0)
                this.setState({ segment: objArray });
        }
    }
    // submit for all data  
    submitHandler = async () => {
        console.log('submitHandler');
        const paramHeaders = await authHelper.getHeaderWithToken();
        if (await this.validate()) {
            var resultFF = null;
            const ffObject = { name: this.state.componentName, 
                               type: this.state.componentType, 
                               loadFrom: this.state.componentListLoadFrom,
                               orgId:this.state.orgId };
            if (this.state.id) {
                console.log('loadStrutureList');

                const seg = await this.loadStrutureList(this.state.id, paramHeaders);
                var toRemove = [];
                for (i = 0; i < seg.length; i++) {
                    toRemove.push(seg[i].id);
                }
                console.log('toRemove: ', toRemove);

                resultFF = await axiosHelper.axiosPost(env.dataBaseEndPoint + '/ff/update/' + this.state.id, ffObject, paramHeaders);
                // delete all related records
                // structure
                await axiosHelper.axiosGet(env.dataBaseEndPoint + '/structure/remove/' + this.state.id, paramHeaders);
                // segment  
                await axiosHelper.axiosPost(env.dataBaseEndPoint + '/segment/bulkRemove', toRemove, paramHeaders);
                console.log('post remove');

            }
            else{
                console.log('ffObject:: ', ffObject);
                console.log('paramHeaders:: ', paramHeaders);
                resultFF = await axiosHelper.axiosPost(env.dataBaseEndPoint + '/ff/store', ffObject, paramHeaders);
            }

            console.log('resultFF:: ', resultFF);
            if (resultFF && resultFF.id) {
                this.setState({ id: resultFF.id });
            }
            var segment = []
            for (var i = 0; i < this.state.segment.length; i++) {
                // push only attributes that have values
                var obj = {};
                obj["orgId"] = this.state.orgId;
                if (this.state.segment[i].name !== undefined && this.state.segment[i].name !== null)
                    obj["name"] = this.state.segment[i].name
                if (this.state.segment[i].value !== undefined && this.state.segment[i].value !== null)
                    obj["value"] = this.state.segment[i].value
                if (this.state.segment[i].component !== undefined && this.state.segment[i].component !== null)
                    obj["component"] = this.state.segment[i].component

                segment.push(obj);
            }
            console.log('segment to save ', segment);

            var ebit_structures = [];
            var resultSegment = [];
            if (segment[0] && segment[0].name !== undefined) {
                try {
                    resultSegment = await axiosHelper.axiosPost(env.dataBaseEndPoint + '/segment/bulkStore', segment, paramHeaders);
                } catch (err) {

                }
            }

            if (resultSegment && resultSegment.ebit_ff_segments) {
                const storedSegment = resultSegment.ebit_ff_segments;

                for (var i = 0; i < storedSegment.length; i++) {
                    ebit_structures.push({ segmentId: storedSegment[i].id, ffId: this.state.id, order: i });
                }
                console.log('ebit_structures::', ebit_structures);

                const resultStructure = await axiosHelper.axiosPost(env.dataBaseEndPoint + '/structure/bulkStore', ebit_structures, paramHeaders);
                this.setState({ structure: resultStructure });
                console.log('Done! ', resultStructure);
            }

            this.sendData();

        }
    }
    render() {
        console.log('componentType:: ', this.state.componentType);
        var checkedOptList = false;
        var checkedOptForm = false;
        if (this.state.componentType === 'form')
            checkedOptForm = true;
        if (this.state.componentType === 'list')
            checkedOptList = true;

        return (
            <Row>
                <Col>
                    <Card>

                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Novo componente</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <FormWithConstraints ref="fform" onSubmit={this.submitHandler} noValidate>
                                    <Form.Group as={Row} controlId="formBasiccomponentName">
                                        <Form.Label as="legend" column sm={2}>Nome</Form.Label>
                                        <Col>
                                            <Form.Control type="text"
                                                placeholder="Entre com nome componente"
                                                name="componentName" value={this.state.componentName ? this.state.componentName : ''}
                                                required
                                                onChange={this.changeHandler} />
                                            {/*this.state.showMessageForm ? <p className="error">Por favor o Nome!</p> : <></>*/
                                            }
                                            <FieldFeedbacks for="componentName">
                                                <FieldFeedback when="valueMissing">Por favor o Nome!</FieldFeedback>
                                            </FieldFeedbacks>

                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formOrList">
                                        <Form.Label as="legend" column sm={2}>Tipo ecrã</Form.Label>
                                        <fieldset>
                                            <Col sm={10}>

                                                <Form.Check required name="componentType" inline label="Formulário" type="radio" id="inline-1-radio" value="form" onChange={this.changeHandler} checked={checkedOptForm} />
                                                <Form.Check required name="componentType" inline label="Lista" type="radio" id="inline-2-radio" value="list" onChange={this.changeHandler} checked={checkedOptList} />
                                            </Col>
                                        </fieldset>
                                        <FieldFeedbacks for="componentType">
                                            <FieldFeedback when="valueMissing">Por favor o Tipo ecrã!</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Form.Group>
                                    {
                                        checkedOptList ?

                                            <Form.Group as={Row} controlId="formComponentListLoadFrom">
                                                <Form.Label as="legend" column sm={2}>URL para carregar lista </Form.Label>
                                                <Col>
                                                    <Form.Control type="text"
                                                        placeholder="Entre com nome URL para carregar lista"
                                                        name="componentListLoadFrom" defaultValue={this.state.componentListLoadFrom ? this.state.componentListLoadFrom : ''}
                                                        required
                                                        onChange={this.changeHandler}
                                                        onBlur={this.componentListLoadFromChange} />
                                                    <FieldFeedbacks for="componentListLoadFrom">
                                                        <FieldFeedback when="valueMissing">Por favor URL para carregar lista!</FieldFeedback>
                                                    </FieldFeedbacks>
                                                </Col>
                                            </Form.Group>

                                            : null
                                    }
                                </FormWithConstraints>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Lista Input</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col >
                                        <div className="divTable">
                                            {this.state.showMessageComp ? <p className="error">Por favor adicione valores na lista!</p> : <></>
                                            }
                                            <div className="divTableBody">
                                                <div className="divTableHeading">Nome </div>
                                                <div className="divTableHeading">Valor defeito </div>
                                                <div className="divTableHeading">Componente </div>

                                                <div className="divTableHeading">
                                                    <Button variant="outline-primary" onClick={() => { this.addData({}) }}>
                                                        Ad
                                                        </Button>
                                                </div>

                                                {this.state.segment.length > 0 ? (
                                                    this.state.segment.map((item, i) => (
                                                        <div className="divTableRow" key={i} id={"row" + i}>
                                                            <div className="divTableCell">
                                                                <Form.Control id={"name" + i} type="text" name="name" defaultValue={item.name ? item.name : ''} onChange={(e) => {
                                                                    let segment = this.state.segment;
                                                                    segment[i].name = e.target.value;
                                                                    this.setState({ segment });
                                                                }}>
                                                                </Form.Control>
                                                            </div>
                                                            <div className="divTableCell">
                                                                <Form.Control id={"value" + i} type="text" name="value" defaultValue={item.value ? item.value : ''} onChange={(e) => {
                                                                    let segment = this.state.segment;
                                                                    segment[i].value = e.target.value;
                                                                    this.setState({ segment });
                                                                }}>
                                                                </Form.Control>
                                                            </div>
                                                            <div className="divTableCell">
                                                                <Form.Control id={"component" + i} as="select" value={item.component} className="mb-3" name="component" required onChange={(e) => {
                                                                    let segment = this.state.segment;
                                                                    segment[i].component = e.target.value;
                                                                    this.setState({ segment });
                                                                }}>
                                                                    {componentData.map(sc => {
                                                                        return <option key={sc.name} value={sc.name} >{sc.name}</option>;
                                                                    }
                                                                    )}
                                                                </Form.Control>
                                                            </div>
                                                            <div className="divTableCell">
                                                                <Button variant="danger" as={Col} md="0.5" onClick={() => { this.handlerDelete(i) }}>Ex</Button>
                                                            </div>

                                                        </div>
                                                    ))

                                                ) : (
                                                        <div className="divTableRow" >
                                                            <div> no data</div>
                                                        </div>
                                                    )}
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
                                        <Button className="button-right" variant="outline-primary" onClick={this.submitHandler} >
                                            Gravar
                                    </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                    </Card>

                </Col>
            </Row>
        )
    }
}
export default FlexComponent;
import React, { useState, Fragment, useEffect } from 'react';
import { Row, Col, Card, Button, Table, Form, InputGroup, FormControl } from 'react-bootstrap';
import axiosHelper from '../../helper/axiosHelper';
import authHelper from '../../helper/authHelper';
import BeatLoader from "react-spinners/BeatLoader";
import FlexComponent from './FlexComponent';
import * as env from '../../../env';
import { Base64 } from 'js-base64';
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 px;
  margin-left:25%;
  border-color: rgb(7, 172, 238);
`;

class ListFlexComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            orgId:'',
            formName: '',
            editing: false,
            adding: false,
            loading: true,
            fformData: {},
            dados: [],

        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.addDados = this.addDados.bind(this);
        this.callbackFunction = this.callbackFunction.bind(this);
        this.delHandler = this.delHandler.bind(this);
        this.editDados = this.editDados.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    // same as componentDidUpdate https://daveceddia.com/useeffect-hook-examples/
    async componentDidMount() {

        this.state.orgId = this.props.orgId;
       // this.setState({orgId:this.props.orgId});
        const result = await this.loadData();

    };
    async loadData(formName) {
        const token = Base64.encode(await authHelper.getHeaderToken());
        const paramHeaders = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }, withCredentials: true
        };
        const url = env.dataBaseEndPoint + '/ff/list/' + formName+'/'+this.state.orgId;
        const resultFF = await axiosHelper.axiosGet(url, paramHeaders);
        if (resultFF && resultFF.ebit_ffs) {
            this.setState({ dados: resultFF.ebit_ffs });
        }else   
            this.setState({loading:false});
        return resultFF;
    }

    //add data to list Operations
    addDados() {
        this.setState({ adding: true });
    }
    // editar 
    editDados(id, name, type, loadFrom) {
        this.setState({ fformData: { id: id, name: name,type:type, loadFrom:loadFrom }, editing: true });
    }

    // del ff
    async delHandler(id) {
        const token = Base64.encode(await authHelper.getHeaderToken());
        const paramHeaders = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }, withCredentials: true
        };
        // filter position
        const filtered = this.state.dados.findIndex(a => a.id === id);
        // remove one element from position
        this.state.dados.splice(filtered, 1);
        await axiosHelper.axiosGet(env.dataBaseEndPoint + '/ff/remove/' + id, paramHeaders);

        window.location.reload();
    }
    // force reload
    async upHandler() {
        const result = await this.loadData();
       // this.forceUpdate();
    }
    callbackFunction(data) {

       this.setState({ adding: false,editing:false });
       this.upHandler();
    }
    changeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    async onSearchClick() {
        console.log('look for: ', this.state.formName);
        const result = await this.loadData(this.state.formName);
        console.log('result: ', result);
        if (result && result.ebit_ffs) {
            this.setState({ dados: result.ebit_ffs });
        }
    }
    // when finish loading, send data to flow
    sendData = () => {
        //this.props.parentCallback(this.state);
    }
    render() {

        return (
            <>
                <Row>
                    <Col>
                        <div className="flex-large">
                            {this.state.adding || this.state.editing ? (
                                <Fragment>
                                    <FlexComponent
                                        fformData={this.state.fformData}
                                        editing={this.state.editing}
                                        parentCallback={this.callbackFunction.bind(this)}
                                        orgId={this.state.orgId}
                                    />
                                </Fragment>
                                
                            ) : (
                                    <Fragment>
                                        <Row>

                                            <Col>
                                                <InputGroup className="mb-3">
                                                    <FormControl
                                                        placeholder="Nome componente"
                                                        aria-label="id"
                                                        aria-describedby="basic-addon2"
                                                        name="formName"
                                                        defaultValue={this.state.formName.name}
                                                        onChange={(e) => { this.changeHandler(e) }}
                                                    />
                                                    <InputGroup.Append>
                                                        <Button variant="outline-secondary" onClick={(e) => { this.onSearchClick(e) }}>Procurar</Button>
                                                    </InputGroup.Append>

                                                </InputGroup>

                                            </Col>
                                            <Col>
                                                <Button className="button-right" type="submit" variant="outline-primary" onClick={this.addDados} >
                                                    Novo
                                    </Button>
                                            </Col>
                                        </Row>
                                    </Fragment>
                                )}
                        </div>

                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>

                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>List componentes</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.dados.length > 0 ? (
                                    this.state.dados.map((item, index) => (

                                        <tr key={index}>
                                            <td>
                                                <Form.Control key={index} type="text" name="name" value={item.name} readOnly>
                                                </Form.Control>
                                            </td>
                                            <td>
                                                <Button variant="outline-primary" onClick={() => this.editDados(item.id, item.name, item.type, item.loadFrom)}>Ed</Button>

                                            </td>
                                            <td>
                                                <Button variant="danger" onClick={() => this.delHandler(item.id)}>Ex</Button>

                                            </td>

                                        </tr>
                                    )
                                    )) : (
                                        <tr>
                                            <td colSpan={3}> <BeatLoader
                                                css={override}
                                                size={10}
                                                color={"#4893e9"}
                                                loading={this.state.loading} /></td>
                                        </tr>
                                    )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </>
        )
    }
}
export default ListFlexComponent;
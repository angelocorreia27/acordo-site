import React, {  Fragment } from 'react';
import { Container, Row, Col, Button, Table, InputGroup, FormControl } from 'react-bootstrap';
import axiosHelper from '../../helper/axiosHelper';
import authHelper from '../../helper/authHelper';
import BeatLoader from "react-spinners/BeatLoader";
import Organization from './Organization';
import * as env from '../../../env';
import { Base64 } from 'js-base64';
import { css } from "@emotion/core";
import {SELO_DIGITAL} from '../../../store/constant';
import UtilHelper from '../../helper/UtilHelper';

const override = css`
  display: block;
  margin: 0 px;
  margin-left:25%;
  border-color: rgb(7, 172, 238);
`;

class ListOrganization extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            dados: [],
            editing: false,
            adding: false,
            formName: '',
            loading: true
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.addDados = this.addDados.bind(this);
        this.callbackFunction = this.callbackFunction.bind(this);
        this.delHandler = this.delHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    // same as componentDidUpdate https://daveceddia.com/useeffect-hook-examples/
    async componentDidMount() {
        console.log('componentDidMount');
        const result = await this.loadData();

        if (result && result.ebit_organization_users) {
            this.setState({ dados: result.ebit_organization_users });
        }else   
            this.setState({loading:false});

        console.log('state: ', this.state);
    };
    async loadData() {
        const token = Base64.encode(await authHelper.getHeaderToken());
        const paramHeaders = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }, withCredentials: true
        };
        console.log('token: ', token);
        const url = env.dataBaseEndPoint + '/organization_user/list';
        const organization_user = await axiosHelper.axiosGet(url, paramHeaders);
        console.log('organization_user: ', organization_user);
        return organization_user;
    }

    //add data to list Operations
    addDados() {
        this.setState({ adding: true });
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
        await axiosHelper.axiosGet(env.dataBaseEndPoint + '/organization_user/list/' + id, paramHeaders);

        window.location.reload();
    }
    // force reload
    async upHandler(id) {
        window.location.reload();
    }
    callbackFunction(data) {

        this.setState({ adding: false,editing:false });
       this.upHandler(1200);
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
        this.props.parentCallback(this.state);
    }
    render() {

        return (
            <Container>
                <h3 className="title">Organização</h3>
                <Row>
                    <Col>
                        <div className="flex-large">
                            {this.state.adding || this.state.editing ? (
                                <Fragment>
                                    <Organization
                                        parentCallback={this.callbackFunction.bind(this)}
                                    />
                                </Fragment>
                            ) : (
                                    <Fragment>
                                        <Row>

                                            <Col>
                                                <InputGroup className="mb-3">
                                                    <FormControl
                                                        placeholder="Nome organização"
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
                                    <th>Common Name</th>
                                    <th>Organization Name</th>
                                    <th>Email Address</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.dados.length > 0 ? (
                                    this.state.dados.map((item, index) => (

                                        <tr key={index}>
                                            <td>{item.ebit_organization.commonName}</td>
                                            <td>{item.ebit_organization.organizationName}</td>
                                            <td>{item.ebit_organization.emailAddress}</td>
                                           
                                            <td>
                                                <Button variant="outline-primary" href={SELO_DIGITAL.Dashboard+'?r='+UtilHelper.base64ParamEncode('orgId='+item.ebit_organization.id)}>Dash</Button>
                                                <Button variant="danger" onClick={() => this.delHandler(item.ebit_organization.id)}>Ex</Button>
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
            </Container>
        )
    }
}
export default ListOrganization;
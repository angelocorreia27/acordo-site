import React, { Component } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import axiosHelper from '../../helper/axiosHelper';
import authHelper from '../../helper/authHelper';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/core";
import { Base64 } from 'js-base64';
import * as env from '../../../env';

let Arraychecked = [];
const override = css`
  display: block;
  margin: 0 px;
  margin-left:25%;
  border-color: rgb(7, 172, 238);
`;

export default class TableFF extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orgId: '',
            loading: true,
            listFf: [],
            listChecked: []
        };
        this.onChange = this.onChange.bind(this);
    }


    componentDidMount() {
        this.load();
    }

    onChange = e => {

        if (e.target.value != '0')
            Arraychecked.push({ id: e.target.value });
        else // find element and remove one position
            Arraychecked.splice(Arraychecked.indexOf({ id: e.target.value }), 1);

        ///this.setState({ listChecked: Arraychecked });
        //this.sendData();
        this.props.parentCallback(Arraychecked);
    };


    async load() {
        const name = 'undefined';
        const paramHeaders = await authHelper.getHeaderWithToken();
        var resultForm = await axiosHelper.axiosGet(env.dataBaseEndPoint + '/ff/list/' + name+ '/' +this.props.orgId, paramHeaders);
        if (resultForm && resultForm.ebit_ffs) {
            this.setState({ listFf: resultForm.ebit_ffs });
        }
        else
            this.setState({ loading: false });
    }

    render() {

        return (
            <Row>
                <Col >
                    <Table responsive>
                        <thead>
                            <tr>
                                <th scope="col">Componentes</th>
                                <th scope="col">Incorporar</th>
                            </tr>
                        </thead>

                        <tbody>

                            {this.state.listFf.length > 0 ? (
                                this.state.listFf.map((dados, i) => (
                                    <tr key={"tr" + i}>
                                        <td key={"td1" + i}>{dados.name}</td>
                                        <td key={"td2" + i}> <Radio.Group key={dados.id} options={
                                            [
                                                { label: 'Não', value: '0' },
                                                { label: 'Sim', value: dados.id }
                                            ]} defaultValue="0" onChange={this.onChange} /> </td>

                                    </tr>
                                )
                                )) : (
                                    <tr>
                                        <td colSpan={3}><BeatLoader
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

        )
    }
}

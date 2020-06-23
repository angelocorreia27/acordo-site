import React, { Component } from 'react';
import * as  reactBootstrap from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import axiosHelper from '../../helper/axiosHelper';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/core";

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
            listFf: [],
            listChecked: [],
            loading: true
        };
        this.onChange = this.onChange.bind(this);
    }


    async  componentDidMount() {
        const paramHeaders = { headers: { 'Accept': 'application/json' }, withCredentials: true };

        let resultForm = null; //await axiosHelper.axiosGet('/ff/list/', paramHeaders);
        if (resultForm){
            this.setState({ listFf: resultForm.ebit_ffs });
        }
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


    render() {
       
        return (
            <reactBootstrap.Row>
                <reactBootstrap.Col >
                    <reactBootstrap.Table responsive>
                        <thead>
                            <tr>
                                <th scope="col">Flex Field</th>
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
                    </reactBootstrap.Table>
                </reactBootstrap.Col>
            </reactBootstrap.Row>

        )
    }
}

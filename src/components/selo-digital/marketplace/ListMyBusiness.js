import React, { Fragment } from 'react';
import { Container, Row, Col,  Button, Table, Form } from 'react-bootstrap';
import axiosHelper from '../../helper/axiosHelper';
import authHelper from '../../helper/authHelper';
import BeatLoader from "react-spinners/BeatLoader";
import * as env from '../../../env';
import { css } from "@emotion/core";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import CreateBusinessFlow from './CreateBusinessFlow';

const override = css`
  display: block;
  margin: 0 px;
  margin-left:25%;
  border-color: rgb(7, 172, 238);
`;

class ListMyBusiness extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            orgId: '',
            dados: [],
            adding: false,
            loading: true
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.delHandler = this.delHandler.bind(this);
        this.editDados = this.editDados.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    // same as componentDidUpdate https://daveceddia.com/useeffect-hook-examples/
    componentDidMount() {

        this.setState({ orgId: this.props.orgId });
        console.log('componentDidMount: ', this.state);
        this.loadData();

    };
    async loadData() {
        const paramHeaders = await authHelper.getHeaderWithToken();
        console.log('paramHeaders: ', paramHeaders);
        const url = env.dataBaseEndPoint + '/market/list/' + this.state.orgId;
        const result = await axiosHelper.axiosGet(url, paramHeaders);
        if (result && result.ebit_markets && result.ebit_markets.length > 0) {
            this.setState({ dados: result.ebit_markets });
        } else
            this.setState({ loading: false });
    }

    // change 
    editDados = async (id) => {
        this.setState({ id: id });
        const paramHeaders = await authHelper.getHeaderWithToken();
        const url = env.dataBaseEndPoint + '/market/visible/' + this.state.id;
        await axiosHelper.axiosGet(url, paramHeaders);
        //window.location.reload();
        this.loadData();

    }

    // del ff
    async delHandler(id) {
        const paramHeaders = await authHelper.getHeaderWithToken();
        // filter position
        const filtered = this.state.dados.findIndex(a => a.id === id);
        // remove one element from position
        this.state.dados.splice(filtered, 1);
        await axiosHelper.axiosGet(env.dataBaseEndPoint + '/market/remove/' + id, paramHeaders);
        this.loadData();
        //window.location.reload();
    }
    addNew() {
        console.log('add ');
         this.setState({ adding: true });
    }
    closeAdding(){
        this.setState({ adding: false });
        this.loadData();
    }
    render() {

        return (
            <Container>
                <Row>
                    <Col>
                        <Button className="button-right" type="submit" variant="outline-primary" onClick={() => { this.addNew() }}>
                            Novo
                    </Button>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <Fragment>
                            {
                                this.state.adding ?
                                    <CreateBusinessFlow
                                        orgId={this.props.orgId}
                                        closeAdding={this.closeAdding.bind(this)}
                                    /> : null
                            }
                        </Fragment>
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>Lista negócios</th>
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
                                                <BootstrapSwitchButton checked={item.availability} onstyle="outline-primary"
                                                    offstyle="outline-secondary" size="sm"
                                                    onChange={() => this.editDados(item.id)} />
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
            </Container >
        )
    }
}
export default ListMyBusiness;
import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import RegistoCommodities from './RegistoCommodities';
import TableFF from './TableFF';
import axiosHelper from '../../helper/axiosHelper';
import authHelper from '../../helper/authHelper';
import * as env from '../../../env';
import { Base64 } from 'js-base64';
import { withTranslation } from 'react-i18next';

const sref = React.createRef();
class FlexForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: null,
            name: '',
            price: 0,
            networkType:'',
            description: '',
            image: '',
            userId: null,
            orgId:'',
            showMessageTable:false,
            commoditieFF: {},
            listFfData: []

        }
        // this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.callbackFunctionII = this.callbackFunctionII.bind(this);
        this.sendData = this.sendData.bind(this);
        //this.validate = this.validate.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    // same as componentDidUpdate
    componentDidMount() {
        const { submitFromOutside } = this.props;
        console.log('submitFromOutside: ', submitFromOutside);
        console.log('Flex Form: ', this.state);

        if (submitFromOutside)
            this.submitHandler();
    };

    // Callback the data inserted in RegistoCommodite
    callbackFunction = (commoditieData) => {
        console.log('commoditieData: ', commoditieData);
        this.setState({
            name: commoditieData.name,
            price: commoditieData.price,
            networkType: commoditieData.networkType,
            description: commoditieData.description,
            image: commoditieData.image
        });
    }

    // Callback the data inserted in TableFF
    callbackFunctionII(ListFfData) {
        this.setState({ listFfData: ListFfData });
    }
    // send data to parent
    sendData() {
        this.props.parentCallback(this.state.commoditieFF);
    }
    async validate() {
        let validated = true;
        if (this.state.listFfData.length===0){ // force to choise at least one component
            this.setState({showMessageTable:true});
            validated = false;
        }
        // validate this form
        await sref.current.resetFields();
        await sref.current.validateForm();
        if (!sref.current.isValid())
            validated = false;

        return validated;
    }
    async submitHandler() {
        if (await this.validate()) {
            // e.preventDefault()
            const token = Base64.encode(await authHelper.getHeaderToken());
            const paramHeaders = {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                }, withCredentials: true
            };
            const data = new FormData();
            data.append('name', this.state.name); // id do utilizador em sessao
            data.append('price', this.state.price);
            data.append('networkType', this.state.networkType);
            data.append('description', this.state.description);
            data.append('fileData', this.state.image);
            data.append('orgId', this.props.orgId);

            console.log('data to save', data);
            const resultCommoditie = await axiosHelper.axiosPost(env.dataBaseEndPoint + '/commoditie/store', data, paramHeaders);
//            console.log('commoditie save result ', resultCommoditie.ebit_commodities);
  //          console.log('ListFfData ', this.state.listFfData);
            var commoditieFF = [];
            for (var i = 0; i < this.state.listFfData.length; i++) {
                commoditieFF.push({ commoditieId: resultCommoditie.ebit_commodities.id, ffId: this.state.listFfData[i].id });
            }

          //  console.log('commoditieFF', commoditieFF);

            const commoditieFFResult = await axiosHelper.axiosPost(env.dataBaseEndPoint + '/commoditie_ff/bulkStore', commoditieFF, paramHeaders);
         //   console.log('commoditieFFResult', commoditieFFResult);
            this.setState({ commoditieFF: commoditieFFResult });
            this.sendData();
        }
    }
    render() {
        const { t } = this.props;
        return (
            <Row>
                <Col>
                    <Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Novo API</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <RegistoCommodities sref={sref} parentCallback={this.callbackFunction.bind(this)} />
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
                                    {this.state.showMessageTable ? <p className="error">Por favor escolha pelo menos um valor na lista!</p> : <></>
                                            }
                                        <TableFF orgId={this.props.orgId} parentCallback={this.callbackFunctionII.bind(this)} />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col >
                                        <Button className="button-right" type="submit" variant="outline-primary" onClick={this.submitHandler}>
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
export default withTranslation() (FlexForm);
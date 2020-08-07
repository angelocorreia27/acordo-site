import React, { useState, useEffect, useRef } from 'react'; import Dradrop from '../../dragdrop';
import { Container, Card, Row, Form, Col, Button } from 'react-bootstrap'

import axiosHelper from './../../helper/axiosHelper';
import authHelper from './../../helper/authHelper';
import * as env from '../../../env';
import CardModel from '../../../pages/CardModal';

import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';
import {SELO_DIGITAL} from '../../../store/constant';

const form = React.createRef();
const CreateBusinessFlow = props => {

  const [data, setData] = useState({});
  const [formData, setFormData] = useState({});

  useEffect(() => {
    console.log('useEffect:: orgId', props.orgId);
    const internalLoad = async () => {

      const paramHeaders = await authHelper.getHeaderWithToken();
      const resultCommodities = await axiosHelper.axiosGet(env.dataBaseEndPoint + '/commoditie/listAll', paramHeaders);
      if (resultCommodities && resultCommodities.ebit_commodities) {
        const tasks = {};
        const taskIds = [];
        for (var i = 0; i < resultCommodities.ebit_commodities.length; i++) {
          const cc = resultCommodities.ebit_commodities[i];
          const id = resultCommodities.ebit_commodities[i].id.toString();
          tasks[id] = {
            id: id, content: <div key={"div-grid" + i} className="drag-drop-item"><CardModel key={"api" + cc.id} divStyle={{ width: '8rem' }} title={cc.name.substr(0, 20)}
              imsSrc={cc.image ? cc.image : "/images/api.svg"}
              text={cc.description.substr(0, 18) + ".."} />
            </div>

          };
          taskIds.push(id);

        }
        const columns = {};
        columns['column-1'] = {
          id: 'column-1',
          title: 'APIs',
          taskIds: taskIds
        };
        columns['column-2'] = {
          id: 'column-2',
          title: 'Novo negócio',
          taskIds: [],
        };
        const columnOrder = ['column-1', 'column-2'];

        //this.setState({ tasks: tasks, columns: columns, columnOrder: columnOrder });
        const initialData = { tasks: tasks, columns: columns, columnOrder: columnOrder };
        setData(initialData);
      }

    }
    internalLoad();

  }, [])

  const callbackFunction = (data) => {
    // console.log('data in create flow: ', data);
    setData(data);
  }

  const changeHandler = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  }
  const handleImageChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    console.log('formData: ', formData);


  }

  const validate = async () => {
    let validated = true;
    // validate this form
    await form.current.resetFields();
    await form.current.validateForm();
    if (!await form.current.isValid())
      validated = false;

    return validated;
  }
  const submitHandler = async () => {

    console.log('submitHandler: ', data);
    console.log('submitHandler: ', data.columns['column-2'].taskIds);
    if (await validate()) {
      // Market
      var market = {}; // = formData
      const paramHeaders = await authHelper.getHeaderWithToken();
      formData.orgId = props.orgId;
      market = await axiosHelper.axiosPost(env.dataBaseEndPoint + '/market/store', formData, paramHeaders);
      console.log('save formData result: ', market);

      // commodityMarketPlace
      var commodityMarketPlace = [];
      const newBusiness = data.columns['column-2'].taskIds;
      for (var i = 0; i < newBusiness.length; i++) {
        console.log('id : ', newBusiness[i]);
        commodityMarketPlace.push({
          commodityId: parseInt(newBusiness[i]),
          order: i,
          marketId: market.ebit_markets.id
        });

      }
      console.log('commodityMarketPlace: ', commodityMarketPlace);

      commodityMarketPlace = await axiosHelper.axiosPost(env.dataBaseEndPoint + '/cmp/bulkStore', commodityMarketPlace, paramHeaders);
      console.log('save commodityMarketPlace result: ', commodityMarketPlace);
      if (commodityMarketPlace.ebit_commoditymarketplaces.length >0 )
        props.closeAdding();
        //window.location.href = SELO_DIGITAL.ListMyBusiness;
    }
  }

  var toRender = null;
  if (data && data.tasks) {
    toRender = <Dradrop data={data} parentCallback={callbackFunction} />;
  } else {
    toRender = <p>sem dados</p>;
  }
  return (<Container>
    <Card>
      <Card.Header>
        <Card.Title as="h5">Arraste para o seu Novo negócio a sequência de API's</Card.Title>
      </Card.Header>
      <Card.Body>
        <Row className="justify-content-md-center">
          {toRender}
        </Row>
        <br />
        <Card>
          <Card.Body>
            <Row>
              <FormWithConstraints ref={form} onSubmit={submitHandler} noValidate >

                <Form.Row>
                  <Form.Group as={Col} controlId="formBasicNome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text"
                      placeholder=""
                      name="name" value={formData.name || ''}
                      required
                      onChange={changeHandler} />
                    <FieldFeedbacks for="name">
                      <FieldFeedback when="valueMissing">Por favor o Nome!</FieldFeedback>
                    </FieldFeedbacks>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formBasicDescription">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="text"
                      name="description" value={formData.description || ''}
                      placeholder=""
                      required
                      onChange={changeHandler}
                    />
                    <FieldFeedbacks for="description">
                      <FieldFeedback when="valueMissing">Por favor a Descrição!</FieldFeedback>
                    </FieldFeedbacks>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formBasicImagem">
                    <Form.Label>Imagem</Form.Label>
                    <Form.Control type="file"
                      name="image"
                      accept="image/png, image/jpeg"
                      placeholder=""
                      onChange={handleImageChange} required />
                  </Form.Group>
                </Form.Row>
              </FormWithConstraints>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Button className="button-right" variant="outline-primary" onClick={submitHandler}>
              Gravar
        </Button>
          </Card.Body>
        </Card>

      </Card.Body>
    </Card>
  </Container>
  );

}

export default CreateBusinessFlow;


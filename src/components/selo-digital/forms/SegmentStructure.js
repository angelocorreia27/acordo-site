import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import * as  reactBootstrap from 'react-bootstrap'
import componentData from './componentData';
import validationData from './validationData';
//import { render } from 'node-sass';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/core";
const override = css`
  display: block;
  margin: 0 px;
  margin-left:25%;
  border-color: rgb(7, 172, 238);
`;

const SegmentStructure = props => {

    const initialFormState = { id: null, name: '', value: '', component: '', userId: '1', validationId: '' }
    const [dados, setDados] = useState(initialFormState)
    const changeHandler = (e) => {

        const { name } = e.target

        const nameElement = document.getElementById("namet")
        const valueElement = document.getElementById("valuet")
        //console.log( nameElement.value)
        //console.log( valueElement.value)
        dados.name = nameElement.value
        dados.value = valueElement.value
        e.preventDefault()

        if (name === 'validationId') {
            dados.validationId = e.target.value
        }

        if (name === 'component') {
            dados.component = e.target.value
        }

        if (!dados.name) {
            //console.log('dados', dados);
            return
        }

        props.addChangedValues(dados)

        setDados(dados)

    }

    const loading = true;



    return (
        <reactBootstrap.Row>
            <reactBootstrap.Col>
                <reactBootstrap.Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor defeito</th>
                            <th>Componente</th>
                            {/*
                            <th>Validação</th>
                            <th>Lista valores</th>
                            */}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.Dados.length > 0 ? (
                            props.Dados.map((item, index) => (

                                <tr key={index}>
                                    <td>
                                        <reactBootstrap.Form.Control id="namet" type="text" name="namet" value={item.name} onChange={changeHandler}>

                                        </reactBootstrap.Form.Control></td>
                                    <td>
                                        <reactBootstrap.Form.Control id="valuet" type="text" name="valuet" value={item.value} onChange={changeHandler}>

                                        </reactBootstrap.Form.Control></td>
                                    <td>
                                        <reactBootstrap.Form.Control as="select" className="mb-3" name="component" onChange={changeHandler}>
                                            {componentData.map(sc => <option key={sc.id} value={sc.key} >{sc.name}</option>)}
                                        </reactBootstrap.Form.Control>
                                    </td>
                                    {/*
                                    <td>
                                        <reactBootstrap.Form.Control as="select" className="mb-3" name="validationId" onChange={changeHandler}>
                                            {validationData.map(sc => <option key={sc.id} value={sc.id}>{sc.name}</option>)}
                                        </reactBootstrap.Form.Control>
                                    </td>
                                    <td><reactBootstrap.Button as={Col} md="0.5" className="button muted-button" onClick={() => { props.ValueSet(this.state) }}>Add</reactBootstrap.Button></td>
                                    */}
                                    <td><reactBootstrap.Button variant="outline-primary" as={Col} md="0.5" className="button muted-button" onClick={() => { props.editRow(item) }}>Edit</reactBootstrap.Button>
                                        <reactBootstrap.Button variant="outline-primary" as={Col} md="0.5" className="button muted-button" onClick={() => props.deleteDados(item.id)}>Delete</reactBootstrap.Button></td>
                                </tr>
                            )
                            )) : (
                                <tr>
                                    <td colSpan={3}> <BeatLoader
                                        css={override}
                                        size={10}
                                        color={"#4893e9"}
                                        loading={loading} /></td>
                                </tr>
                            )}
                    </tbody>
                </reactBootstrap.Table>
            </reactBootstrap.Col>
        </reactBootstrap.Row>
    )
}

export default SegmentStructure

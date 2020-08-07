import React from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';


class PagComp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            posID: 90020,
            merchantRef:'',
            referenceNumber:'345345345345',
            entityCode:'345345',
            merchantSession:'',
            amount:'11000',
            currency:'',
            pan:'4012010000000000009', // cardNumber
            name:'',
            dateMonth:'',
            dateYear:'',
            posAutCode: "No85c6N",
            cvv2:'',
            is3DSec:'',
            urlMerchantResponse:'',
            transactionCode:''
        }
       // PATH_VISA:  https://mc.vinti4net.cv/nosi/biz_vbv.jsp
       // VISA_POS_ID:  90020
       // VISA_POS_AUTCODE: No85c6N

       /***
        *  HTP.p('                       
<form name="submeter_pgto" id="submeter_pgto" action="' || v_action || '" method="post" >');
    htp.p('                       
<input name="posID" value="' || v_posid ||'" type="hidden" id="posID" />                       
<input name="merchantRef" type="hidden" id="merchantRef" value="' || p_entidade|| p_referencia|| '"/>                       
<input name="referenceNumber" type="hidden" id="referenceNumber" value="' || p_referencia || '"/>                       
<input name="entityCode" type="hidden" id="entityCode" value="' || p_entidade || '"/>                       
<input name="merchantSession" type="hidden" id="merchantSession" value="' || p_log_id ||'" />                       
<input name="amount" type="hidden" id="amount" value="' || p_montante ||'" />                       
<input name="currency" type="hidden" id="currency" value="132"/>                       
<input name="pan" type="hidden" id="pan" value="' || p_nr_cartao || '"/>                       
<input name="name" type="hidden" id="name" value="' || p_nome_cartao ||
    '" />                       
<input name="dateMonth" type="hidden" id="dateMonth" value="' || p_mes_expiracao ||'" />                       
<input name="dateYear" type="ahidden" id="dateYear" value="' || p_ano_expiracao ||'" />                       
<input name="posAutCode" type="hidden" id="posAutCode" value="' || v_pos_AutCode || '" />                       
<input name="cvv2" type="hidden" id="cvv2" value="' || p_cvv2 ||'" />                       
<input name="is3DSec" type="hidden" id="is3DSec" value="1" />                       
<input name="urlMerchantResponse" type="hidden" id="urlMerchantResponse" value="'||v_path|| '.noscrm_trata_compra.sisp_trata'||'" />                       
<input type="hidden" id="transactionCode" name="transactionCode" value="1">                    
</form>');
        */
    }


    // send data to parent
     sendData = () => {
        this.props.parentCallback(this.state);
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
        this.sendData();
    }
    

    render() {
        const { name } = this.state

        return (
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Pagamento</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <FormWithConstraints ref="pag" onSubmit={this.submitHandler} noValidate >
                                <h5>Dados do pagamento</h5>
                                <Form.Row>
                                    <Form.Group as={Col} md="4" controlId="formEntity">
                                        <Form.Label >Entidade</Form.Label>
                                        <Form.Control type="text"
                                            required
                                            readOnly
                                            placeholder="Entidade"
                                            name="entityCode"
                                            defaultValue={this.state.entityCode}
                                            //onChange={this.changeHandler} 
                                            />
                                        <FieldFeedbacks for="entityCode">
                                            <FieldFeedback when="valueMissing">Por favor a Entidade!</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="formReference">
                                        <Form.Label >Referência</Form.Label>
                                        <Form.Control type="text"
                                            required
                                            readOnly
                                            placeholder="Referência"
                                            name="referenceNumber"
                                            defaultValue={this.state.referenceNumber}
                                            //onChange={this.props.changeHandler} 
                                            />
                                        <FieldFeedbacks for="referenceNumber">
                                            <FieldFeedback when="valueMissing">Por favor a Referência!</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="formValue">
                                        <Form.Label  >Valor</Form.Label>
                                        <Form.Control type="text"
                                            required
                                            readOnly
                                            placeholder="Valor"
                                            name="amount"
                                            defaultValue={this.state.amount}
                                            //onChange={this.props.changeHandler} 
                                            />
                                        <FieldFeedbacks for="amount">
                                            <FieldFeedback when="valueMissing">Por favor o Valor!</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Form.Group>
                                </Form.Row>
                                <br />
                                <h5>Dados do cartão</h5>
                                <Form.Row>
                                    <Form.Group as={Col} md="4" controlId="formName">
                                        <Form.Label>Nome</Form.Label>
                                        <Form.Control type="text"
                                            required
                                            name="name"
                                            value={this.state.name?this.state.name:''}
                                            onChange={this.changeHandler} 
                                            />
                                        <FieldFeedbacks for="name">
                                            <FieldFeedback when="valueMissing">Por favor o Nome!</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="formNumber">
                                        <Form.Label >Número cartão</Form.Label>
                                        <Form.Control type="text"
                                            required
                                            placeholder="Número do cartão"
                                            name="pan"
                                            value={this.state.pan?this.state.pan:''}
                                            onChange={this.changeHandler} />
                                        <FieldFeedbacks for="pan">
                                            <FieldFeedback when="valueMissing">Por favor o Número do cartão!</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="formMonthExpiration">
                                        <Form.Label >Mês expiração</Form.Label>
                                        <Form.Control type="text"
                                            required maxLength={2} minLength={2}
                                            placeholder="Mês de expiração"
                                            name="dateMonth"
                                            value={this.state.dateMonth?this.state.dateMonth:''}
                                            onChange={this.changeHandler} />
                                        <FieldFeedbacks for="dateMonth">
                                            <FieldFeedback when="valueMissing">Por favor Mẽs expiração!</FieldFeedback>
                                            <FieldFeedback when="patternMismatch">Mês expiração deve ter dois Caracteres!</FieldFeedback>
                                            <FieldFeedback when={value => !/[A-Z]/.test(value)} warning>Deve ter números</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="formYearExpiration">
                                        <Form.Label >Ano expiração</Form.Label>
                                        <Form.Control type="text"
                                            required
                                            name="dateYear"
                                            value={this.state.dateYear?this.state.dateYear:''}
                                            onChange={this.changeHandler} />
                                        <FieldFeedbacks for="dateYear">
                                            <FieldFeedback when={value => !/\S+@\S+/.test(value)}>Endereço de Email inválido!.</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="formCVV2">
                                        <Form.Label >CVV2</Form.Label>
                                        <Form.Control type="text"
                                            required
                                            name="cvv2"
                                            value={this.state.cvv2?this.state.cvv2:''}
                                            onChange={this.changeHandler} />
                                        <FieldFeedbacks for="cvv2">
                                            <FieldFeedback when={value => !/\S+@\S+/.test(value)}>CVV2 inválido!.</FieldFeedback>
                                        </FieldFeedbacks>
                                    </Form.Group>
                                </Form.Row>
                            </FormWithConstraints>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        );
    }
}

export default PagComp;

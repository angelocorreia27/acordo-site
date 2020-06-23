import React,{useState, useEffect} from 'react'
import { Button, Form, Col} from 'react-bootstrap'



    
const EditDadosForm = props =>{
const [dados, setDados]= useState(props.currentDados)

useEffect(
    () => {
        setDados(props.currentDados)
    },
    [props]
)

const handleInputChange = e => {
    const {name, value} = e.target

    setDados({...dados, [name]: value})
}



return(
   <Form onSubmit={e=>{
       e.preventDefault()
       props.updateDados(dados.id, dados)
}}
>
<Col md={6}>
    <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={dados.name} onChange={handleInputChange}/>
    </Form.Group>
        <Form.Group controlId="formBasicValue">
        <Form.Label>Value</Form.Label>
        <Form.Control type="text" name="value" value={dados.value} onChange={handleInputChange}/>    
    </Form.Group>    
        <Button type="submit" variant="outline-primary" >Update</Button>
        <Button variant="outline-primary" onClick={()=> props.setEditing(false)}>Cancel</Button>
    </Col>
</Form>
)
}

export default EditDadosForm


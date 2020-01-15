import React, {useState} from 'react'
import ReactJsonDynamicForms from 'react-json-dynamic-forms'
import { Form, Col } from 'react-bootstrap'
import Footer from './Footer';
import MenuHeader from './MenuHeader';

const metaData = {

client: {
    ClientName:"john",
    Name:"Doe",
    ClientStreet:"ASA",
    Street:"ASA",
    ClientCity:"rating", 
    Phone: "key",
},

sender: {
     SenderName:"Joe",
     Name:"Doe",
     ClientStreet:"ASA",
     Street:"ASA",
     ClientCity:"rating", 
     Phone: "key",
},

deliverables: {
       Name: "john",
       Email: "john@gmail.com",
       
      },

payments: {
       Name: "Labor",
       Price: "$0.00",
       QTY: "1",
       Subtotal: "$0.00"
},

acceptance: {
     ClientSignature: "Plate Wiring",
     Date: "20/02/19",
     ProviderSignature: "",
     Data: ""
},

}

const [dados, setDados] = useState(metaData)

const handleInputChange = e => {
    const {name, value}= e.target
    setDados ({...dados, [name]:value, [value]:value})
      
  } 


class Contract extends React.Component {
      constructor(props){
          super(props);
        
        this.onChange = this.onChange.bind(this);
    }

                  
   
    render(){

        return (
            <div>
            <MenuHeader>   </MenuHeader>

                <body>
                    
                <Form.Row>

<Col md={6}>

 <Form.Group>
    <Form.Label>Sender.Name</Form.Label>
    <Form.Control id="campo1" className="mb-2 mr-5" type="text" name="name" value={dados.name} onChange={handleInputChange}/>
 </Form.Group>

 <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control id="campo1" className="mb-2 mr-5" type="text" name="name" value={dados.name} onChange={handleInputChange}/>
 </Form.Group>

 <Form.Group>
    <Form.Label>[Sender.Street]</Form.Label>
    <Form.Control id="campo1" className="mb-2 mr-5" type="text" name="name" value={dados.name} onChange={handleInputChange}/>
 </Form.Group>

 <Form.Group>
    <Form.Label>Street</Form.Label>
    <Form.Control id="campo1" className="mb-2 mr-5" type="text" name="name" value={dados.name} onChange={handleInputChange}/>
 </Form.Group>

 <Form.Group>
    <Form.Label>[Sender.City], [Sender.State] [Sender.Zip]</Form.Label>
    <Form.Control id="campo1" className="mb-2 mr-5" type="text" name="name" value={dados.name} onChange={handleInputChange}/>
 </Form.Group>

</Col>


 </Form.Row> 
                    
                 </body> 
                <Footer></Footer>         
                </div>
                
            
        )        
}  

}export default Contract;

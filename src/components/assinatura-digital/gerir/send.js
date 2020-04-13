import React from 'react'
import {Table} from 'react-bootstrap';
import axiosHelper from '../helper/axiosHelper';
import * as env from '../../env';

class Recebidos extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            subject:'',
            text:'',
            to:''   
        }
    }

async handleEndpoint () {
    
    const paramHeaders = {headers: {'Accept': 'application/json',
    'Content-type': 'multipart/form-data'}
  , withCredentials: true}
  
    const data = new FormData(); 

   console.log('id', id);
   console.log('subject', this.state.subject);
   console.log('text', this.state.text);
   console.log('to', this.state.to);
  
  
    data.append('id', id);
    data.append('subject', this.state.subject);
    data.append('text', this.state.text);
    data.append('to', this.state.to);
  
    const url = env.httpProtocol
    +env.serverHost
    +':'+env.serverPort
    +'/negotiation/send';
  
    let negotiationId = await axiosHelper.axiosPost(url,data, paramHeaders);
  
    window.location.href = '/Recebidos';

}

render(){

    return (
     <div>
        <h2>Caixa de Entrada</h2>   
        <Table responsive> 
        <thead>
    <tr> 
      <th>Assunto</th>
      <th>Estado</th>
      <th>Ultima revisao</th>
    </tr>
  </thead>
  <tbody>

					{this.state.acordos && this.state.acordos.length > 0 ? (
						this.state.acordos.map(dados => (
              <tr>

               <td>{dados.title}</td>
               <td>{dados.handleEndpoint}</td>
               <td>{dados.handleEndpoint}</td>
               <td>{dados.handleEndpoint}</td>
              </tr> 
						)
						)) : (
							<tr>No data </tr>
					)}
				

            </tbody>
            </Table>

     </div>           
        

    
    )

}


}export default Recebidos;
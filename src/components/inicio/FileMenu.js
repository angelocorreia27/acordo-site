import React from 'react'
import {Row,Tabs,Tab,ButtonToolbar} from 'react-bootstrap'
import Review from '../gerir/Review'
import MenuDropzone from '../MenuDropzone'
import Modelo from "../gerir/Modelo";

const FileMenu = () => {

    return(
    
    
    <Tabs defaultActiveKey="inicio" id="uncontrolled-tab-example">
                        <Tab eventKey="inicio" title="Inicio">
                       <MenuDropzone/>
                       </Tab>
                       <Tab eventKey="gerir" title="Gerir">
                       <Review/>
                        </Tab>
                        <Tab eventKey="modelo" title="Modelo">
                        <Modelo/>
                
        </Tab>
    </Tabs>
        
    
    );
}  
    
export default FileMenu;
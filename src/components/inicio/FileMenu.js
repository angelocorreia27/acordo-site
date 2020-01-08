import React from 'react'
import {Tabs,Tab } from 'react-bootstrap'
import Review from '../gerir/Review'
import MenuDropzone from '../MenuDropzone'


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
                       
                
        </Tab>
    </Tabs>
        
    
    );
}  
    
export default FileMenu;
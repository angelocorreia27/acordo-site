import React, {useCallback} from 'react'
import useDropzone from 'react-dropzone'
import {Row,Tabs,Tab} from 'react-bootstrap'
import Rever from "../Rever"
import Review from '../Gerir/Review'
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
                        <Tab eventKey="modelo" title="Modelo" disabled>
                
        </Tab>
    </Tabs>
        
    
    );
}  
    
export default FileMenu;
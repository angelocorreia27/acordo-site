import React, { Component } from 'react';
import {Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import Avatar1 from '../../assets/images/user/avatar-1.jpg';
import Avatar2 from '../../assets/images/user/avatar-2.jpg';
import Avatar3 from '../../assets/images/user/avatar-3.jpg';
import Welcome from '../../pages/pages/Welcome';
  
  
class NavRight extends Component {
   state = {
        listOpen: false
    };

    render() {

        return (
            <Aux>
            <div className="look-Screen">  
                <ul className="navbar-nav ml-auto">
                
                    <li className={this.props.rtlLayout ? 'm-r-15' : 'm-l-15'}>
                        <a href={DEMO.BLANK_LINK} className="displayChatbox"><i className="icon feather icon-mail"/></a>
                    </li>
                    <li>

                                <div className="pro-head">
                                    <img src={Avatar2} className="img-radius" alt="User Profile"/>
                                    <span type="user">
                                    <a href={Welcome.Welcome} className="displayChatbox"> 
                                    
                                    <Welcome/>
                                    
                                    <i className="icon feather icon-mail"/></a>   
                                    
                                    
                                    </span>
                                    <a href={DEMO.BLANK_LINK} className="dud-logout" title="Logout">
                                        <i className="feather icon-log-out"/>
                                    </a>
                                </div>
                                    <ul className="pro-body">
                                    <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-settings"/> Settings</a></li>
                                </ul>
                            

                    </li>
                </ul>
               </div>
            </Aux>
        );
    }
}

export default NavRight;

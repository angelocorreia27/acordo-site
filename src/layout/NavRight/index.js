import React, { Component, useState} from 'react';
import {Dropdown} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import Avatar1 from '../../assets/images/user/avatar-1.jpg';
import Avatar2 from '../../assets/images/user/avatar-2.jpg';
import Avatar3 from '../../assets/images/user/avatar-3.jpg';
import Cookies from 'js-cookie'

class NavRight extends Component {
    state = {
        listOpen: false,
        email: Cookies.get('email'),
        setLoading: false
   } ;

      render() {

        return (
            
            <Aux>

            <div className="look-Screen">  
                <ul className="navbar-nav ml-auto">
                
                    <li className={this.props.rtlLayout ? 'm-r-15' : 'm-l-15'}>
                        <a href={DEMO.BLANK_LINK} className="displayChatbox" onClick={() => {this.setState({listOpen: true});}}><i className="icon feather icon-mail"/></a>
                    </li>
                    <li>
                                <div className="pro-head">
                                <a class="dropdown__toggle-button" data-toggle="dropdown" aria-expanded="true" tabindex="0">
                                
                                    </a>
                                <img className="header__user-avatar" src="https://s3.amazonaws.com/thinkific/profiles/014/692/4651575054639.medium.jpeg?1575054639"></img>
                                <i className="fa fa-caret-down">
                                
                                </i>
                                
                                <span type="user">
                                    <a href={DEMO.BLANK_LINK} className="displayChatbox">

                                       <i className="icon feather icon-mail"/></a>   
                                    </span>
                                    
                                    <a href={DEMO.BLANK_LINK} className="dud-logout" title="Logout">{Cookies.getJSON('session')}<i className="feather icon-log-out"/></a></div>
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

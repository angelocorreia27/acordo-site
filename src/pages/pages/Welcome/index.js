import React, {Component} from 'react';
import {Button} from 'react-bootstrap'
 
 
class Welcome extends Component {
  constructor() {
  super();
  this.state = {
      user: []
   };
  
   
  
 function login (){
  const username = localStorage.getItem('http://localhost:8000/auth/elias.lima') && this.setState({

  user: JSON.parse(localStorage.getItem('person'))
  
});


  function handleSubmit(event) {
    event.preventDefault();

    const newUsername = event.target.elements.username.value;
    localStorage.setItem('http://localhost:8000/auth/elias.lima', newUsername);

    window.location.reload();
  }

  function handleLogout() {
    localStorage.removeItem('http://localhost:8000/auth/elias.lima');

    window.location.reload();
  }

 
    if (username !== null) {
    return (
    <div>       
      <p>{`Bem vindo ${username}`}</p>
    
       </div>
 
    );

  }
}}

 render() {
   return (
   <div>
        <p>elias</p>
      
   </div>);

 }

}


export default Welcome;
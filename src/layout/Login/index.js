import React, { Component } from 'react';
import axios from 'axios';


class index extends Component {
   constructor() {
   super();
   this.state = {
        listOpen: false,
        user: []
    };
   
   }

   
   Login = () => {
    const token = localStorage.getItem('token') && this.setState({

        user: JSON.parse(localStorage.getItem('user')),
        listOpen: false
    });
    fetch('http://localhost:8000/auth', { headers: new Headers({ 'Authorization': `Bearer ${token}`})}) 
    .then(response => {
        if(Response.ok){
        return Response.json();
    }
    throw new Error("Oops! Ocorreu un erro:");
}).then(user => console.log(user))
  .catch(e => console.log(e));
}



}


export default index;
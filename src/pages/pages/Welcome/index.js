import React, {Component} from 'react';

 
 
class Welcome extends Component {
  constructor() {
  super();
  this.state = {
      user: []
   };
  
  }

Login = () => {
  const username = localStorage.getItem('http://localhost:8000/auth/elias.lima') && this.setState({

  user: JSON.parse(localStorage.getItem('user')),
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

        <p>{`Bem vindo ${username}`}</p>
     
    );

  }
}

 render() {
   return (
   <div>

     {this.Login()}
   </div>)

 }

}


export default Welcome;
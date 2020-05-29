import React from 'react';
import Cookies from 'js-cookie';
import * as env from '../../src/env';
import Nav from 'react-bootstrap/Nav'



var urlLogin = env.httpProtocol + env.serverHost + ':' + env.serverPort + '/' + env.serverAuth;
var urlLogout = env.httpProtocol + env.serverHost + ':' + env.serverPort + '/' + env.serverAuth + '/logout';
var sessPerson = null;
export default class NavRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            localSessPerson:{username:null}
        };
    }
    // Aqui deve verificar o cookie, caso exister:
    //     mostra o nome da pessoa em sessão
    //     link de logout  (deve chamar o link do servidor para termino de sessão: /auth/logout)
    // caso não mostra link de inicio de sessão

    componentDidMount() {
        sessPerson = Cookies.get('sessPerson');

        try {
            if (sessPerson != "undefined" && sessPerson != null) {
                // replace j: to ''
                localStorage.setItem('sessPerson', sessPerson.replace("j:", ''));
            }
            //const localSessPerson = JSON.parse(localStorage.getItem('sessPerson'));

            this.setState({localSessPerson:localStorage.getItem('sessPerson')});
        } catch (e) {
            console.log('error: ', e);
        }
    }
 
    render() {
        if (this.state.localSessPerson && this.state.localSessPerson.username) {
            return (
                     <>  
                        <p>Olá {this.state.localSessPerson.username} <a href={urlLogout}> | Sair</a></p>
                    </>
                       
                );
        } else
            return (<>
                        <Nav.Link href={urlLogin}>Login</Nav.Link>
                    </>
                    );

    }
}
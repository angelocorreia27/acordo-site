import React from 'react';
import Cookies from 'js-cookie';
import * as env from '../../src/env';
import Nav from 'react-bootstrap/Nav'



var urlLogin = env.httpProtocol + env.serverHost + ':' + env.serverPort + '/' + env.serverAuth;
var urlLogout = env.httpProtocol + env.serverHost + ':' + env.serverPort + '/' + env.serverAuth + '/logout';

export default class NavRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,

        };
    }
    // Aqui deve verificar o cookie, caso exister:
    //     mostra o nome da pessoa em sessão
    //     link de logout  (deve chamar o link do servidor para termino de sessão: /auth/logout)
    // caso não mostra link de inicio de sessão

    componentDidMount() {
        var session = Cookies.get('sessPerson');
        try {
            if (session != "undefined" && session != null) {
                localStorage.setItem('UserSession', session);
            }
        } catch (e) {
        }
    }
 
    render() {
        var username = localStorage.getItem('UserSession')
        if (username != "undefined" && username != null) {
            return (
                    <Nav.Item>
                        <span>Bem-Vindo  {username}</span> <Nav.Link href={urlLogout}>Sair</Nav.Link>
                    </Nav.Item>
                );
        } else
            return (
                    <Nav.Item>
                        <Nav.Link href={urlLogin}>Login</Nav.Link>
                    </Nav.Item>
                    );

    }
}
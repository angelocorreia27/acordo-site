import React from 'react';
import Cookies from 'js-cookie';
import * as env from '../../src/env';
import Nav from 'react-bootstrap/Nav'
import authHelper from '../components/helper/authHelper';


var urlLogin = env.httpProtocol + env.serverHost + ':' + env.serverPort + env.serverAuth;
var urlLogout = env.httpProtocol + env.serverHost + ':' + env.serverPort + env.serverAuth + '/logout';
var sessPerson = null;
export default class NavRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            localSessPerson:{isAuthenticated: null,
                            username: null,
                            email: null,
                            expirationDate: null,
                            locale: null}
        };
    }
    // Aqui deve verificar o cookie, caso exister:
    //     mostra o nome da pessoa em sessão
    //     link de logout  (deve chamar o link do servidor para termino de sessão: /auth/logout)
    // caso não mostra link de inicio de sessão

    componentDidMount() {
        sessPerson = Cookies.get(env.CookieSessName);
        try {
            if (sessPerson != "undefined" && sessPerson != null) {
                // replace j: to ''
                const jsonResult = JSON.parse(sessPerson.replace("j:", ''));
                
                authHelper.SetStore('isAuthenticated',jsonResult.isAuthenticated );
                authHelper.SetStore('username',jsonResult.username );
                authHelper.SetStore('email',jsonResult.email );
                authHelper.SetStore('expirationDate',jsonResult.expirationDate );
                authHelper.SetStore('locale',jsonResult.locale );

                this.setState({localSessPerson:jsonResult});
            }

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
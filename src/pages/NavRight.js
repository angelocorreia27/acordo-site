import React from 'react';
import Cookies from 'js-cookie';
import * as env from '../../src/env';
import Nav from 'react-bootstrap/Nav'
import authHelper from '../components/helper/authHelper';
import ModalGridMenu from './ModalGridMenu';
import { withTranslation } from 'react-i18next';

var urlLogin = env.httpProtocol + env.serverHost + ':' + env.serverPort + env.serverAuth;
var urlLogout = env.httpProtocol + env.serverHost + ':' + env.serverPort + env.serverAuth + '/logout';
var sessPerson = null;

class NavRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            localSessPerson: {
                isAuthenticated: null,
                username: null,
                email: null,
                expirationDate: null,
                locale: null
            },
            popup: false
        };
        this.hideModal = this.hideModal.bind(this);
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

                authHelper.SetStore('isAuthenticated', jsonResult.isAuthenticated);
                authHelper.SetStore('username', jsonResult.username);
                authHelper.SetStore('email', jsonResult.email);
                authHelper.SetStore('expirationDate', jsonResult.expirationDate);
                authHelper.SetStore('locale', jsonResult.locale);

                this.setState({ localSessPerson: jsonResult });
            }

        } catch (e) {
            console.log('error: ', e);
        }
    }
    handleClick = e => {
        console.log('click ', e);
        this.setState({ popup: true });
    };

    hideModal = () => {
        this.setState({ popup: false });
    };
    render() {
        const { t } = this.props;
        if (this.state.localSessPerson && this.state.localSessPerson.username) {
            return (<>
                <Nav.Item>
                    <Nav.Link href="#">
                        Olá {this.state.localSessPerson.username}
                    </Nav.Link>
                </Nav.Item>
                    &nbsp;&nbsp;
                <Nav.Item>
                    <Nav.Link onClick={this.handleClick}>
                        <i className="gg-menu-grid-r"></i>
                    </Nav.Link>
                </Nav.Item>
                {this.state.popup ?
                    <ModalGridMenu showModal={this.state.popup} hideModal={this.hideModal} />
                    : null}

                    &nbsp;
                <Nav.Item>
                <Nav.Link href={urlLogout}>{t('common:page.nave-rigth.log-out')}</Nav.Link>
                </Nav.Item>
            </>);
        } else
            return (<>
                <Nav.Item>
            <Nav.Link href={urlLogin}>{t('common:page.nave-rigth.login')}</Nav.Link>
                </Nav.Item>
            </>);

    }
}
export default withTranslation() (NavRight)
require('dotenv').config();

// commom
export const appName = process.env.REACT_APP_APPNAME || 'DocsVeritas';
export const copyRightYear = process.env.REACT_APP_COPYRIGHTYEAR || '2020';
export const webUrl = process.env.REACT_APP_WEBURL || 'www.docsveritas.cv';
export const CookieSessName = 'sessPerson';


export const httpProtocol = process.env.REACT_APP_HTTPPROTOCOL || 'http://';

// Server values
export const serverHost = process.env.REACT_APP_SERVERHOST || 'localhost';
export const serverPort = process.env.REACT_APP_SERVERPORT || '8000';
export const serverAuth = process.env.REACT_APP_SERVERAUTH || '/auth';

// Client app
export const clientHost = process.env.REACT_APP_CLIENTHOST || 'localhost';
export const clientPort = process.env.REACT_APP_CLIENTPORT || '4000';
export const clientViewer = process.env.REACT_APP_CLIENTVIEWER || '/viewer';

// Database Backend Endpoint
export const dataBaseEndPoint = process.env.DATABASEENDPOINT || httpProtocol+serverHost+':5000';
export const dataBaseAPITransactionEndPoint = '/api/do-transaction';
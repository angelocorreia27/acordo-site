import * as dotenv from 'dotenv';
dotenv.config();

// commom
export const appName = process.env.APPNAME || 'DocVeritas';
export const copyRightYear = process.env.COPYRIGHTYEAR || '2020';
export const webUrl = process.env.WEBURL || 'www.docveritas.cv';


export const httpProtocol = process.env.HTTPPROTOCOL || 'http://';

// Server values
export const serverHost = process.env.SERVERHOST || 'localhost';
export const serverPort = process.env.SERVERPORT || '8000';
export const serverAuth = process.env.SERVERAUTH || 'auth';

// Client app
export const clientHost = process.env.clientHost || 'localhost';
export const clientPort = process.env.clientPort || '4000';
export const clientViewer = process.env.clientViewer || 'viewer';

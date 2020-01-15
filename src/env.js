import * as dotenv from 'dotenv';
dotenv.config();

// commom
export const httpProtocol = process.env.HTTPPROTOCOL || 'http://';

// Server values
export const serverHost = process.env.SERVERHOST || '10.4.9.73';
export const serverPort = process.env.SERVERPORT || '8000';
export const serverAuth = process.env.SERVERAUTH || '/auth';

// Client app
export const clientHost = process.env.clientHost || 'localhost';
export const clientPort = process.env.clientPort || '3000';
export const clientViewer = process.env.clientViewer || '/viewer';

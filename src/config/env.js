export const PROTOCOL = {
    http: "http",
    developmentPort: 5000,
    productionPort: 80,
    // developmentServerName: "prologicmacbookpro15.local",
    developmentServerName: "localhost",
    productionServerName: "vectorai.postprincipal.com",
};

export const config = {
    development: `${PROTOCOL.http}://${PROTOCOL.developmentServerName}:${PROTOCOL.developmentPort}`,
    serverUrl: 'http://10.4.9.73:8000/'
};
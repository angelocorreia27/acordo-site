export const PROTOCOL = {
    http: "http",
    developmentPort: 5000,
    productionPort: 80,
    // developmentServerName: "prologicmacbookpro15.local",
    developmentServerName: "localhost",
    productionServerName: "vectorai.postprincipal.com",
};

export const API = {
    development: `${PROTOCOL.http}://${PROTOCOL.developmentServerName}:${PROTOCOL.developmentPort}`,
    production: `${PROTOCOL.http}://${PROTOCOL.productionServerName}:${PROTOCOL.productionPort}`,
};
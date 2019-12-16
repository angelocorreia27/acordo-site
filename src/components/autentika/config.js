var config = {}

config.redirect_url = 'http://localhost:3000/auth/login';
config.client_id = '8kj5ZDL59ELDIBsFHwlSJ48Jg8wa';
config.client_secret = 'MCQv1HvTF9FeT_QY2rRezpcUzHca';
config.accessTokenUri= 'https://autentika.gov.cv/oauth2/token',
config.authorizationUri= 'https://autentika.gov.cv/oauth2/authorize',
config.userEndpoint = 'https://autentika.gov.cv/oauth2/userinfo?schema=openid';
config.response_type = 'code';


module.exports = config;
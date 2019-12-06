
const oauth2 = () => {
var config = require('config')

var ClientOAuth2 = require('client-oauth2')
var storeNewToken= null;

var githubAuth = new ClientOAuth2({
        clientId: config.ClientOAuth2,
        clientSecret: config.clientSecret,
        accessTokenUri: config.accessToken,
        authorizationUri: config.authorizationUri,
        redirectUri: config.redirectUri,
        scopes: config.scopes
    })



    exports.validate =  function(){

    // Can also just pass the raw `data` object in place of an argument.
    var token = githubAuth.createToken('access token', 'optional refresh token', 'optional token type', { data: 'raw user data' })
    
    // Set the token TTL.
    token.expiresIn(1234) // Seconds.
    token.expiresIn(new Date('2016-11-08')) // Date.
    
    // Refresh the users credentials and save the new access token and info.
    token.refresh().then(storeNewToken)
    
    // Sign a standard HTTP request object, updating the URL with the access token
    // or adding authorization headers, depending on token type.
    token.sign({
    method: 'get',
    url: 'https://api.github.com/users'
    }) //=> { method, url, headers, ... }
}

exports.login = function (){

    var express = require('express')
    var app = express()
 
    app.get('/auth/github', function (req, res) {
    var uri = githubAuth.code.getUri()
    
    res.redirect(uri)
    })
 
    app.get('/auth/github/callback', function (req, res) {
        githubAuth.code.getToken(req.originalUrl)
            .then(function (user) {
            console.log(user) //=> { accessToken: '...', tokenType: 'bearer', ... }
        
            // Refresh the current users access token.
            user.refresh().then(function (updatedUser) {
                console.log(updatedUser !== user) //=> true
                console.log(updatedUser.accessToken)
            })
        
            // Sign API requests on behalf of the current user.
            user.sign({
                method: 'get',
                url: 'http://example.com'
            })
        
            // We should store the token into a database.
            return res.send(user.accessToken)
            })
        })
    }
}
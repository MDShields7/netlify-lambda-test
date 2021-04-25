const Axios = require('axios');
var access_token = '';  

exports.handler = async function(event, context) {
  // your server-side functionality
  const FORGE_CLIENT_ID = process.env.FORGE_CLIENT_ID;
  const FORGE_CLIENT_SECRET = process.env.FORGE_CLIENT_SECRET;
  Axios({
    method: 'POST',
    url: 'https://developer.api.autodesk.com/authentication/v1/authenticate',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
    },
    data: querystring.stringify({
        client_id: FORGE_CLIENT_ID,
        client_secret: FORGE_CLIENT_SECRET,
        grant_type: 'client_credentials',
        scope: scopes
    })
})
    .then(function (response) {
        // Success
        access_token = response.data.access_token;
        console.log(response);
        res.status(200).send(access_token);
    })
    .catch(function (error) {
        // Failed
        console.log(error);
        res.status(401).send('Failed to authenticate');
    });
}
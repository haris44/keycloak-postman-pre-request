const server       = "https://keycloak.xxx.com"
const realm        = ""
const grantType    = "client_credentials"
const clientId     = ""
const clientSecret = ""

const url  = `${server}/auth/realms/${realm}/protocol/openid-connect/token`
const raw = `grant_type=${grantType}&client_id=${clientId}&client_secret=${clientSecret}`

pm.sendRequest({
    url: url,
    method: 'POST',
    header: { 'Content-Type': 'application/x-www-form-urlencoded'},
    body: {
        mode: 'raw',
        raw: raw
    }
}, (err, response) => {
    if(err)
        console.error(err)
    
    pm.environment.set('token', response.json().access_token);
})

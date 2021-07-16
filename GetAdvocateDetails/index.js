const fetch = require('node-fetch');

module.exports = async function (context) {
    let response = await fetch(`https://api.github.com/users/${context.bindings.username}`, {
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'AppName: 1.0',
            'Authorization': `Token ${process.env['GitToken']}`
        }
    });
    if(response.ok)
        return response.json();
    else
        return {};
};
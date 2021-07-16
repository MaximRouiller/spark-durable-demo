const fetch = require('node-fetch');

module.exports = async function (context) {
    let response = await fetch(process.env['AdvocatesAPI'], {
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'AppName: 1.0',
            'Authorization': `Token ${process.env['GitToken']}`
        }
    });
    return response.json();
};

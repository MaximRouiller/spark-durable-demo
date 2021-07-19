const fetch = require('node-fetch').default;
let appInsights = require('applicationinsights');
appInsights.setup().start();

module.exports = async function (context) {
    const time = Date.now();
    let response = await fetch(process.env['AdvocatesAPI'], {
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'AppName: 1.0',
            'Authorization': `Token ${process.env['GitToken']}`,
        },
    });
    var success = response.ok;
    appInsights.defaultClient.trackDependency({
        resultCode: response.status,
        name: 'API/Get Advocates',
        dependencyTypeName: 'HTTP',
        data: process.env['AdvocatesAPI'],
        duration: Date.now() - time,
        success: success,
    });

    if (success) return response.json();
    else return [];
};

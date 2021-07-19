const fetch = require('node-fetch').default;
let appInsights = require('applicationinsights');
appInsights.setup();
appInsights.defaultClient.setAutoPopulateAzureProperties(true);
appInsights.start();

module.exports = async function (context) {
    const time = Date.now();
    const url = `https://api.github.com/users/${context.bindings.username}`;
    let response = await fetch(url, {
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
        name: 'GitHub/Get User',
        dependencyTypeName: 'HTTP',
        data: url,
        duration: Date.now() - time,
        success: success,
    });

    if (success) return response.json();
    else return {};
};

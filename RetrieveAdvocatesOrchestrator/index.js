const df = require('durable-functions');

module.exports = df.orchestrator(function* (context) {
    const tasks = [];
    let advocates = yield context.df.callActivity('GetAdvocatesList', undefined);

    for (let i = 0; i < advocates.length; i++) {
        const advocate = advocates[i];
        tasks.push(context.df.callActivity('GetAdvocateDetails', advocate.gitHubUsername));
    }
    const advocateDetails = yield context.df.Task.all(tasks);

    let totalPublicRepositories = 0;
    for (let i = 0; i < advocateDetails.length; i++) {
        const advocateDetail = advocateDetails[i];
        totalPublicRepositories += advocateDetail.public_repos ?? 0;
    }
    return totalPublicRepositories;
});

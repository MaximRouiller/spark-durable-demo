const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {
    const outputs = [];

    // Replace "Hello" with the name of your Durable Activity Function.
    outputs.push(context.df.callActivity("Hello", "Tokyo"));
    outputs.push(context.df.callActivity("Hello", "Seattle"));
    outputs.push(context.df.callActivity("Hello", "London"));
    outputs.push(context.df.callActivity("Hello", "Montreal"));
    outputs.push(context.df.callActivity("Hello", "Sidney"));
    outputs.push(context.df.callActivity("Hello", "Boston"));

    // returns 🤷‍♂️
    const results = yield context.df.Task.all(outputs);
    return results;
});
# SPARK Conference Durable Functions Demo

## `local.settings.json`

This code depends on two environment variables.

* `AdvocatesAPI` which is a URL to the list of advocates created by [this repository](https://github.com/MaximRouiller/AdvocatesListService).
* `GitToken` which can be created [here](https://github.com/settings/tokens) and ensuring that the scope `public_repo` and `read:user` are set.

Sample `local.settings.json`

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AdvocatesAPI": "https://advocateslistservice.azurewebsites.net/api/DashboardAdvocates",
    "GitToken": "ghp_..."
  }
}
```

## Deploying to Azure

You can right click publish this repository to any Azure Functions using Node 14 LTS. Ensure to have the two environment variables set properly to ensure it works correctly.
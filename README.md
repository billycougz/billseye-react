# Billseye Dart Database

A rapid refactor of the simple JQuery/PHP/MySQL app I built in 2017, now using React & AWS Amplify w/ GraphQL & DynamoDB. The intent was to get this refactored and usable ASAP, so the implementation is full of opportunities...

## What is Billseye?

Billseye provides a frontend for entering the results of basic dart matches (i.e., 1v1 matches), and a backend for storing those results. There is no concept of users or authentication as the purpose is to enable a simple/frictionless interface for my circle of friends to keep track of game history. There really isn't anything **dart** specific about Billseye other than the branding and initial use case.

## Amplify Troubleshooting

### data should NOT have additional properties: 'graphqltransformer'

Check the Amplify CLI version within the Amplify build settings in the console.

### API Key
1. Option 1: Extend the expiration of the current key via the AppSync console (not always an option)
2. Option 2: Create a new key by pushing Amplify config changes
    - The following changes are made within `amplify/backend/api/billseye/parameters.json`
    - Delete old key by changing `CreateAPIKey` to `0`
    - Recreate by changing back to `1`
    - Redeploy frontend
    - Handle for each environment
    - If an old key exists in the AppSync console, delete it

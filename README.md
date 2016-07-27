# Apollo-Meteor-React Chatroom Tutorial
### Commit #1

## In this commit:
- A bunch of boilerplate.  (Almost!) All the packages (Meteor and NPM) you will need for the app.  Don't worry about the ones that aren't included.  They will come later.
- Setup for Apollo Server, including `/imports/api/schema.js` which holds the GraphQL configuration for the time being.
- Setup for React app rendering and integration with Apollo Client.  See nesting in `client/index.js`.


----
## Overview

This application will serve as a step-by-step guide through the various parts of [Apollo Stack](apollostack.com).  It will culminate in a simplistic chatroom app that allows users to set their username then send messages, as well as see messages from other users connected to the app.  It will cover:
- Apollo integration with Meteor + React
- Use of the [GraphiQL GUI](https://github.com/graphql/graphiql)
- The four main features of Apollo Server: mocking, schemas, resolvers, and connectors

___

## Usage
To spin up the boilerplate in this current commit, simply clone the repo, cd in, `npm install`, and `meteor`.  You're off to the races now.  Checkout `localhost:3000` to see the app rendered (hint: it's not very exciting now) or `localhost:3000/graphql` to see the GraphQL GUI.  Try typing
```
{
  randomString
}
```
into the left side of the GraphiQL window, then click the run button at the top or press `cmd+enter`.  You should see:
```
{
  "data": {
    "randomString": "xxxxxxxxxx"
  }
}
```

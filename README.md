# Ads Checkout System

This app was built using [Sailsjs](http://sailsjs.com/get-started) for its backend API and [React](https://facebook.github.io/react/) as its frontend framework, with [Redux](http://redux.js.org/) for state management and [Jest](https://facebook.github.io/jest/docs/getting-started.html) for tests, combined with [Enzyme](http://airbnb.io/enzyme/).

## Get started

#### Backend
+ Navigate to the backend folder, and run `npm install` or `yarn install`
+ To start the app, run `sails lift`. The server should be running on port `1337` by default

#### Frontend
+ Navigate to the backend folder, and run `npm install` or `yarn install`
+ Make sure to edit the API endpoint, if you've run the sails server in different port other than `1337`. The endpoint can be change in `src/api/endpoints.js`.


#### Start the front end server
    npm start

#### Testing
    npm test


##### About the app

I decided to create a little backend for the app, but I don't have much time to add much more comprehensive APIs, so some business logic are delegate to the front end.

I choose to build this with Redux even though I have not built something more than a todo using Redux. I've started React with its `setState` and find its more clear for me to see what are the state that involved within a component. However, as things grow larger and complex, I see the importance of Redux.

Getting gripe around its mental model is challenging especially when preparing the actions creator and the reducer but it was fun.

For the CSS, I'm using [Tachyons](http://tachyons.io/) CSS toolkit as I've always a fan of this toolkit, for quick interface implementation.

In terms of unit testing, this is honestly my very first time writing test for React so apologize for any smelly test script. I might miss some test cases too, hopefully not too much.

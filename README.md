# Ads Checkout System

A sample app built using [Sailsjs](http://sailsjs.com/get-started) for its backend API and [React](https://facebook.github.io/react/) as its frontend framework, with [Redux](http://redux.js.org/) for state management and [Jest](https://facebook.github.io/jest/docs/getting-started.html) for tests, combined with [Enzyme](http://airbnb.io/enzyme/). This part of technical test for a front-end position that I was invited to, which I ended up turned down.

## Get started

#### Backend
+ Navigate to the backend folder, and run `npm install` or `yarn install`
+ To start the app, run `sails lift`. The server should be running on port `1337` by default
+ To add default data, you need to use sent a `POST` request using POSTMAN or curl to this endpoint:
  `http://localhost:1337/api/defaultData`

#### Frontend
+ Navigate to the backend folder, and run `npm install` or `yarn install`
+ Make sure to edit the API endpoint, if you've run the sails server in different port other than `1337`. The endpoint can be change in `src/api/endpoints.js`.


#### Start the front end server
    npm start

#### Testing
    npm test

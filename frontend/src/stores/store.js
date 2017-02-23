import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers';

const middlewares = [];

// only log in dev
if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger');
  const logger = createLogger();
  middlewares.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middlewares));


export default store;

import { applyMiddleware, compose, createStore } from 'redux';
import combinedReducer                           from './reducers';
import promiseMiddleware                         from 'redux-promise-middleware';

const middleware = [
  applyMiddleware(promiseMiddleware()),
];

if (window.devToolsExtension) middleware.push(window.devToolsExtension());

export default createStore(
  combinedReducer,
  compose(...middleware),
);

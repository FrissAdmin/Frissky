import { applyMiddleware, createStore } from 'redux';
import combinedReducer                  from './reducers';
import promiseMiddleware                from 'redux-promise-middleware';

export default createStore(
  combinedReducer,
  applyMiddleware(promiseMiddleware()),
);

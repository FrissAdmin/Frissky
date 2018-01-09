import App                from './components/App';
import authActionCreators from './actionCreators/auth';
import React              from 'react';
import ReactDOM           from 'react-dom';
import store              from './store';

if (store.getState().getIn(['auth', 'isLoggedIn'])) {
  store.dispatch(authActionCreators.loadAuthData());
}

ReactDOM.render(<App />, document.getElementById('react-root'));

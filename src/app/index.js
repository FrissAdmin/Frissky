import { AppContainer }   from 'react-hot-loader';
import App                from './components/App';
import authActionCreators from './actionCreators/auth';
import React              from 'react';
import ReactDOM           from 'react-dom';
import store              from './store';

if (store.getState().getIn(['auth', 'isLoggedIn'])) {
  store.dispatch(authActionCreators.loadAuthData());
}

const render = (Component) => {
  ReactDOM.render(
    <AppContainer><Component /></AppContainer>,
    document.getElementById('react-root'),
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(require('./components/App').default);
  });
}

import { BrowserRouter }        from 'react-router-dom';
import { Provider }             from 'react-redux';
import React, { PureComponent } from 'react';
import Routes                   from './Routes';
import store                    from 'app/store';

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

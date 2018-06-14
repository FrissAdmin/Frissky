import { BrowserRouter }        from 'react-router-dom';
import { Provider }             from 'react-redux';
import Layout                   from 'components/Layout';
import React, { PureComponent } from 'react';
import store                    from 'store';

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </Provider>
    );
  }
}

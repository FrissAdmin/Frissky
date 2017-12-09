import { Provider }             from 'react-redux';
import React, { PureComponent } from 'react';
import store                    from '../../store';
import styles                   from './styles';
import Survey                   from '../Survey';

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={ store }>
        <div className={ styles.Root }>
          <Survey />
        </div>
      </Provider>
    );
  }
}

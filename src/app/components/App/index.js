import styles from './styles';
import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  render() {
    return (
      <div className={ styles.Root }>
        <h1><span>Hello</span> <span>World</span>!</h1>
      </div>
    );
  }
}

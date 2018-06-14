import containerFactory         from 'containers/factory';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default containerFactory(class Layout extends PureComponent {
  render() {
    return (
      <div className={ styles.Root } />
    );
  }
}, true);

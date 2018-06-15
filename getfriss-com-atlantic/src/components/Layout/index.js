import React, { PureComponent } from 'react';
import styles                   from './styles';
import Survey                   from 'components/pages/Survey';

export default class Layout extends PureComponent {
  render() {
    return (
      <div className={ styles.Root }>
        <Survey />
      </div>
    );
  }
}

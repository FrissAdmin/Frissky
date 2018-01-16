import * as appPropTypes        from 'constants/propTypes';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Message extends PureComponent {
  static propTypes = {
    message : appPropTypes.message,
  }

  render() {
    const { message } = this.props;

    return (
      <div className={ styles.Root }>
        <div className={ styles.Content }>
          { message.get('content') }
        </div>
      </div>
    );
  }
}

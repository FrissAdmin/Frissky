import * as appPropTypes        from 'constants/propTypes';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class User extends PureComponent {
  static propTypes = {
    user : appPropTypes.user,
  }

  renderName() {
    if (this.props.user.get('firstName') || this.props.user.get('lastName')) {
      return (
        <div className={ styles.Name }>
          { `${this.props.user.get('firstName')} ${this.props.user.get('lastName')}` }
        </div>
      );
    }

    return (
      <div className={ styles.Name }>
        { this.props.user.get('email') }
      </div>
    );
  }

  render() {
    return (
      <li className={ styles.Root }>
        { this.renderName() }
      </li>
    );
  }
}

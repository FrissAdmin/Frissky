import * as appPropTypes        from 'constants/propTypes';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class User extends PureComponent {
  static propTypes = {
    messagesActions : appPropTypes.actions,
    user            : appPropTypes.user,
  }

  handleSendMessage = (event) => {
    event.preventDefault();
    this.props.messagesActions.beginMessage(this.props.user.get('id'));
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
        <button onClick={ this.handleSendMessage }>Send message</button>
      </li>
    );
  }
}

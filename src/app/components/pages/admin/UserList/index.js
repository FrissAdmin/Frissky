import * as appPropTypes        from 'constants/propTypes';
import containerFactory         from 'containers/factory';
import React, { PureComponent } from 'react';
import styles                   from './styles';
import User                     from './User';

export default containerFactory(class UserList extends PureComponent {
  static propTypes = {
    globalActions   : appPropTypes.actions,
    messagesActions : appPropTypes.actions,
    users           : appPropTypes.usersState,
  }

  componentWillMount() {
    this.props.globalActions.loadUsers();
  }

  render() {
    return (
      <div className={ styles.Root }>
        <h1 className={ styles.Title }>Users</h1>

        <ul className={ styles.Users }>
          <For each="user" of={ this.props.users.get('loaded') }>
            <User
              key={ `user-list-user-${user.get('id')}` }
              messagesActions={ this.props.messagesActions }
              user={ user }
            />
          </For>
        </ul>
      </div>
    );
  }
});

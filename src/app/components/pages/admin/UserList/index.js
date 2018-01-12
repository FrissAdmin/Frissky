import * as appPropTypes        from 'constants/propTypes';
import containerFactory         from 'containers/factory';
import React, { PureComponent } from 'react';
import styles                   from './styles';
import User                     from './User';

export default containerFactory(class UserList extends PureComponent {
  static propTypes = {
    globalActions : appPropTypes.actions,
    users         : appPropTypes.usersState,
  }

  componentWillMount() {
    this.props.globalActions.loadUsers();
  }

  render() {
    return (
      <div className={ styles.Root }>
        <h1 className={ styles.Title }>Users</h1>

        <ul className={ styles.Questions }>
          <For each="user" of={ this.props.users.get('loaded') }>
            <User
              key={ `user-list-user-${user.get('id')}` }
              user={ user }
            />
          </For>
        </ul>
      </div>
    );
  }
});

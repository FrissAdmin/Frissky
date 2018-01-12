import { Redirect, Route, Switch } from 'react-router';
import * as appPropTypes           from 'constants/propTypes';
import * as routes                 from 'constants/routes';
import containerFactory            from 'containers/factory';
import React, { PureComponent }    from 'react';
import UserList                    from 'components/pages/admin/UserList';

export default containerFactory(class AdminRoutes extends PureComponent {
  static propTypes = {
    auth : appPropTypes.auth,
  }

  render() {
    if (this.props.auth.getIn(['user', 'role']) !== 'admin') {
      return (
        <Redirect to={ routes.LOGIN } />
      );
    }

    return (
      <Switch>
        <Route exact path={ routes.USER_LIST }><UserList /></Route>
        <Route path={ routes.USER_DETAIL }><UserList /></Route>
      </Switch>
    );
  }
});

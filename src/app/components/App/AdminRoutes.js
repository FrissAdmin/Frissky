import * as appPropTypes           from 'constants/propTypes';
import { Redirect, Route, Switch } from 'react-router';
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
        <Redirect to="/login" />
      );
    }

    return (
      <Switch>
        <Route exact path="/users"><UserList /></Route>
      </Switch>
    );
  }
});

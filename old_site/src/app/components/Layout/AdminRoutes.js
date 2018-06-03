import { Redirect, Route, Switch, withRouter } from 'react-router';
import * as appPropTypes                       from 'constants/propTypes';
import * as routes                             from 'constants/routes';
import Channels                                from 'components/pages/customer/Channels';
import Messages                                from 'components/pages/customer/Messages';
import React, { Component }                    from 'react';
import UserList                                from 'components/pages/admin/UserList';

export default withRouter(class AdminRoutes extends Component {
  static propTypes = {
    auth : appPropTypes.auth,
  }

  shouldComponentUpdate(nextProps) {
    return (
      this.props.location.pathname !== nextProps.location.pathname ||
      this.props.auth !== nextProps.auth
    );
  }

  render() {
    const { auth } = this.props;

    if (auth.get('isLoaded') && auth.getIn(['user', 'role']) !== 'admin') {
      return (
        <Redirect to={ routes.LOGIN } />
      );
    }

    return (
      <Switch>
        <Route exact path={ routes.CHANNELS }><Channels /></Route>
        <Route exact path={ routes.MESSAGES }><Messages /></Route>
        <Route exact path={ routes.USER_DETAIL }><UserList /></Route>
        <Route exact path={ routes.USER_LIST }><UserList /></Route>
      </Switch>
    );
  }
});

import { Route, Switch, withRouter } from 'react-router';
import * as appPropTypes             from 'constants/propTypes';
import * as routes                   from 'constants/routes';
import Channels                      from 'components/pages/customer/Channels';
import Messages                      from 'components/pages/customer/Messages';
import React, { Component }          from 'react';

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

    if (auth.get('isLoaded') && !['admin', 'customer'].includes(auth.getIn(['user', 'role']))) {
      return null;
    }

    return (
      <Switch>
        <Route exact path={ routes.CHANNELS }><Channels /></Route>
        <Route path={ routes.MESSAGES }><Messages /></Route>
      </Switch>
    );
  }
});

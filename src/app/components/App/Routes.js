import { Switch, Route, withRouter }    from 'react-router';
import * as routes          from 'constants/routes';
import AdminRoutes          from './AdminRoutes';
import Login                from 'components/pages/Login';
import React, { Component } from 'react';
import Register             from 'components/pages/Register';
import Survey               from 'components/pages/Survey';

export default withRouter(class Routes extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.location.pathname !== nextProps.location.pathname;
  }

  render() {
    return (
      <Switch>
        <Route exact path={ routes.LOGIN }><Login /></Route>
        <Route exact path={ routes.REGISTER }><Register /></Route>
        <Route exact path={ routes.SURVEY }><Survey /></Route>

        <Route path="/admin">
          <AdminRoutes />
        </Route>
      </Switch>
    );
  }
});

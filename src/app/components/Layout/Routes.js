import { Switch, Route, withRouter } from 'react-router';
import * as appPropTypes             from 'constants/propTypes';
import * as routes                   from 'constants/routes';
import AdminRoutes                   from './AdminRoutes';
import CustomerRoutes                from './CustomerRoutes';
import Login                         from 'components/pages/Login';
import React, { Component }          from 'react';
import Register                      from 'components/pages/Register';
import Survey                        from 'components/pages/Survey';

export default withRouter(class Routes extends Component {
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
    return (
      <Switch>
        <Route exact path={ routes.LOGIN }><Login /></Route>
        <Route exact path={ routes.REGISTER }><Register /></Route>
        <Route exact path={ routes.SURVEY }><Survey /></Route>

        <Route path="/admin">
          <AdminRoutes auth={ this.props.auth } />
        </Route>

        <CustomerRoutes auth={ this.props.auth } />
      </Switch>
    );
  }
});

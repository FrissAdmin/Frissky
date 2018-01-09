import { Switch, Route }        from 'react-router';
import AdminRoutes              from './AdminRoutes';
import Login                    from 'components/pages/Login';
import Register                 from 'components/pages/Register';
import React, { PureComponent } from 'react';
import Survey                   from 'components/pages/Survey';

export default class Routes extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/register"><Register /></Route>
        <Route exact path="/survey"><Survey /></Route>

        <Route path="/admin">
          <AdminRoutes />
        </Route>
      </Switch>
    );
  }
}

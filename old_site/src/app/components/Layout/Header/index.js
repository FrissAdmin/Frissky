import { Link }                 from 'react-router-dom';
import * as appPropTypes        from 'constants/propTypes';
import * as routes              from 'constants/routes';
import AdminNav                 from './AdminNav';
import CustomerNav              from './CustomerNav';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Header extends PureComponent {
  static propTypes = {
    auth        : appPropTypes.auth,
    authActions : appPropTypes.actions,
  }

  renderUserNav() {
    if (this.props.auth.getIn(['user', 'role']) === 'admin') return <AdminNav />;
    return <CustomerNav />;
  }

  renderLogin() {
    if (this.props.auth.get('user') !== null) {
      return (
        <Link
          className={ styles.Link }
          onClick={ this.props.authActions.logout }
          to={ routes.LOGIN }
        >
          Logout
        </Link>
      );
    }

    return (
      <Link to={ routes.LOGIN }>Login</Link>
    );
  }

  render() {
    return (
      <header className={ styles.Root }>
        <div className={ styles.Logo }>friss</div>

        { this.renderUserNav() }

        <nav className={ styles.Nav }>
          <ul>
            <li className={ styles.LinkWrapper }>
              { this.renderLogin() }
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

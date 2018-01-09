import { Link }                 from 'react-router-dom';
import * as appPropTypes        from 'constants/propTypes';
import containerFactory         from 'containers/factory';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default containerFactory(class Layout extends PureComponent {
  static propTypes = {
    auth        : appPropTypes.auth,
    authActions : appPropTypes.actions,
  }

  logout = () => this.props.authActions.logout()

  renderLogin() {
    if (this.props.auth.get('isLoggedIn')) {
      return (
        <Link onClick={ this.logout } to="/login">Logout</Link>
      );
    }

    return (
      <Link to="/login">Login</Link>
    );
  }

  render() {
    return (
      <div className={ styles.Root }>
        <header className={ styles.Header }>
          <nav className={ styles.Nav } />
          <div className={ styles.Logo }>friss</div>
          <nav className={ styles.Nav }>
            <ul>
              <li><Link onClick={ this.logout } to="/login">Logout</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          { this.props.children }
        </main>

        <footer>
          <div />
        </footer>
      </div>
    );
  }
});

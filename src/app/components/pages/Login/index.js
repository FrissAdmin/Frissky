import * as appPropTypes        from 'constants/propTypes';
import containerFactory         from 'containers/factory';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default containerFactory(class Login extends PureComponent {
  static propTypes = {
    auth        : appPropTypes.auth,
    authActions : appPropTypes.actions,
  }

  render() {
    return (
      <div className={ styles.Root }>
        <h1 className={ styles.Title }>Log In</h1>

        <form>
          <label className={ styles.Label }>Email</label>
          <input type="text" />
          <label className={ styles.Label }>Password</label>
          <input type="password" />

          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
});

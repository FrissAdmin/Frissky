import * as appPropTypes        from 'constants/propTypes';
import containerFactory         from 'containers/factory';
import Header                   from './Header';
import React, { PureComponent } from 'react';
import Routes                   from './Routes';
import styles                   from './styles';

export default containerFactory(class Layout extends PureComponent {
  static propTypes = {
    auth        : appPropTypes.auth,
    authActions : appPropTypes.actions,
  }

  render() {
    const {
      auth,
      authActions,
    } = this.props;

    return (
      <div className={ styles.Root }>
        <Header { ...{
          auth,
          authActions,
        } } />

        <main>
          <Routes auth={ auth } />
        </main>

        <footer>
          <div />
        </footer>
      </div>
    );
  }
}, true);

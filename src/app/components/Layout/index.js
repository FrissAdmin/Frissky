import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class App extends PureComponent {
  render() {
    return (
      <div className={ styles.Root }>
        <header>
          <div />
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
}

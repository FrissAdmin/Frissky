import { Link }                 from 'react-router-dom';
import * as routes              from 'constants/routes';
import React, { PureComponent } from 'react';
import styles                   from '../styles';

export default class CustomerNav extends PureComponent {
  render() {
    return (
      <nav className={ styles.Nav }>
        <ul>
          <li className={ styles.LinkWrapper }>
            <Link className={ styles.Link } to={ routes.SURVEY }>Survey</Link>
          </li>
          <li className={ styles.LinkWrapper }>
            <Link className={ styles.Link } to={ routes.MESSAGES }>Messages</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

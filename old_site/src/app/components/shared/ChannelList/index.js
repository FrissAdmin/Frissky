import { Link }                 from 'react-router-dom';
import * as appPropTypes        from 'constants/propTypes';
import * as routes              from 'constants/routes';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Channels extends PureComponent {
  static propTypes = {
    channels : appPropTypes.channels,
  }

  getChannelTitle(channel) {
    if (channel.get('name')) return channel.get('name');
    return channel.get('id');
  }

  render() {
    return (
      <ul className={ styles.Channels }>
        <For each="channel" of={ this.props.channels }>
          <li key={ channel.get('id') }>
            <Link
              to={ routes.getRouteWithParams(routes.MESSAGES, {
                channel_id : channel.get('id'),
              }) }
            >
              { this.getChannelTitle(channel) }
            </Link>
          </li>
        </For>
      </ul>
    );
  }
}

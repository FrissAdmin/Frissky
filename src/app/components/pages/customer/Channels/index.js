import * as appPropTypes        from 'constants/propTypes';
import ChannelList              from 'components/shared/ChannelList';
import containerFactory         from 'containers/factory';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default containerFactory(class Channels extends PureComponent {
  static propTypes = {
    messages        : appPropTypes.messagesState,
    messagesActions : appPropTypes.actions,
  }

  componentWillMount() {
    this.props.messagesActions.loadChannels();
  }

  render() {
    return (
      <div className={ styles.Root }>
        <h1 className={ styles.Title }>Message Threads</h1>

        <ChannelList channels={ this.props.messages.get('channels') } />
      </div>
    );
  }
});

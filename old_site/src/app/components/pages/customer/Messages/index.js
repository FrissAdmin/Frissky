import * as appPropTypes        from 'constants/propTypes';
import containerFactory         from 'containers/factory';
import getIn                    from 'lib/getIn';
import Message                  from './Message';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default containerFactory(class Messages extends PureComponent {
  static propTypes = {
    messages        : appPropTypes.messagesState,
    messagesActions : appPropTypes.actions,
  }

  state = {
    newMessage : '',
  }

  componentWillMount() {
    if (getIn(this.props, ['match', 'params', 'channel_id']) === undefined) return;

    this.props.messagesActions.loadMessages(
      getIn(this.props, ['match', 'params', 'channel_id']),
    );
  }

  handleInput = (event) => this.setState({ newMessage : event.currentTarget.value })

  sendMessage = (event) => {
    event.preventDefault();
    this.props.messagesActions.sendMessage({
      channel : getIn(this.props, ['match', 'params', 'channel_id']),
      content : this.state.newMessage,
    });
    this.setState({ newMessage : '' });
  }

  render() {
    return (
      <div className={ styles.Root }>
        <h1 className={ styles.Title }>Messages</h1>

        <div className={ styles.MessageList }>
          <For each="message" of={ this.props.messages.get('messages') }>
            <Message key={ message.get('id') } message={ message } />
          </For>
        </div>

        <form className={ styles.Input } onSubmit={ this.sendMessage }>
          <input
            onChange={ this.handleInput }
            placeholder="Type message here"
            type="text"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}, true);

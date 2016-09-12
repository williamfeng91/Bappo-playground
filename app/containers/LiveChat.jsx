import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import { addMessageItem, addUserName } from '../actions/chat';

// dumb components for display
import InputChat from '../components/InputChat';
import MessageArea from '../components/MessageArea';

class LiveChat extends React.Component {
  state = {
    socket: null,
    roomName: '',
    chatMsgs: [
      {
        sender: 'bob',
        msgbody: 'test1',
        timestamp: new Date(),
      },
      {
        sender: 'tom',
        msgbody: 'test33',
        timestamp: new Date(),
      },
    ],
  }

  // currently for testing: roomName = 'Test room' + applicationID
  componentWillMount() {
    // this.setState({ roomName: `Test room ${this.props.appId}` });
    this.setState({ roomName: 'Test room' });
    this.props.addUserName('Potatooo');
    this.startChat();
  }

  // connects to server and then listens to messages and system prompts
  // All about socket
  startChat = () => {
    this.state.socket = io.connect(`${location.protocol}//${location.host}`);
    this.state.socket.emit('new user', 'test room');

    // listen to messages and system prompts
    this.state.socket.on('message', msg => {
      this.props.addMessageItem(msg.sender, msg.msgbody, msg.timestamp);
    });

    this.state.socket.on('prompt', prompt => {
      this.props.addMessageItem('Bappo', prompt, new Date());
    });
  }

  render() {
    return (
      <div>
        <div className="room-name">
          {this.state.roomName}
        </div>
        <MessageArea chatMsgs={this.state.chatMsgs} />

      </div>
    );
  }
}

// <InputChat />

LiveChat.propTypes = {
  // State Props
  // chatMsgs: PropTypes.array.isRequired,

  // action props
  addMessageItem: PropTypes.func.isRequired,
  addUserName: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    // chatMsgs: state.chat.chatMsgs,
  };
}

export default connect(mapStateToProps, { addMessageItem, addUserName })(LiveChat);

import React from 'react';
import { connect } from 'react-redux';
import { addMessageItem } from '../actions/chat';

class InputChat extends React.Component {
  state = {
    msgInput: '',
  }

  handleInputChange = (e) => {
    this.setState({ msgInput: e.target.value });
  }

  handleMsgSubmit = () => {
    // Add to Redux store
    this.props.addMessageItem(this.props.userName, this.state.msgInput, new Date());
    // Send to server
    const tmpMsg = {
      sender: this.props.userName,
      msgbody: this.state.msgInput,
      timestamp: new Date(),
    };
    this.state.socket.emit('message', tmpMsg);
    this.setState({ msgInput: '' });
  }

  render() {
    return (
      <div className="input-chat">
        <input type="text" onChange={this.handleInputChange} value={this.state.msgInput} />
        <button onClick={this.handleMsgSubmit}>Submit</button>
      </div>
    );
  }
};

export default connect(null, { addMessageItem })(InputChat);

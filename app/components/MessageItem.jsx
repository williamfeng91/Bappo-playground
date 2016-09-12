import React, { PropTypes } from 'react';

const MessageItem = ({ messageItem }) => {
  return (
    <div className="conv-item">
      <div className="sender">{messageItem.sender}</div>
      <div className="msgbody">{messageItem.msgbody}</div>
      <div className="datetime">{messageItem.timestamp.toString().slice(0, 24)}</div>
    </div>
  );
};

MessageItem.propTypes = {
  messageItem: PropTypes.object.isRequired,
};

export default MessageItem;

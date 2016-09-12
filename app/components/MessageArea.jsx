import React, { PropTypes } from 'react';
import MessageItem from './MessageItem';

const MessageArea = ({ chatMsgs }) => {
  const msgItems = chatMsgs.map((msgItem, index) => {
    return (
      <MessageItem key={index} messageItem={msgItem} />
    );
  });

  return (
    <div className="message-area">
      {msgItems}
    </div>
  );
};

MessageArea.propTypes = {
  chatMsgs: PropTypes.array.isRequired,
};

export default MessageArea;

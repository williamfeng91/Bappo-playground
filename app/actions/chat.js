export function addMessageItem(sender, msgbody, timestamp) {
  return {
    type: 'ADD_MESSAGE_ITEM',
    sender,
    msgbody,
    timestamp,
  };
}

export function addUserName(userName) {
  return {
    type: 'ADD_USER_NAME',
    userName,
  }
}

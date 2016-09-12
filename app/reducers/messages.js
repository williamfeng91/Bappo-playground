export default function messages(state = [], action) {
  switch (action.type) {
    case 'ADD_MESSAGE_ITEM':
      return [...state, {
        sender: action.sender,
        msgbody: action.msgbody,
        timestamp: action.timestamp,
      }];
    default:
      return state;
  }
}

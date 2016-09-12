export default function user(state='', action) {
  switch (action.type) {
    case 'ADD_USER_NAME':
      return action.userName;
    default:
      return state;
  }
}

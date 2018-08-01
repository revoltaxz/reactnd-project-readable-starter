const post = (state = {}, action) => {
  switch (action.type) {
    case 'GET_POST':
    case 'ADD_POST':
    case 'EDIT_POST':
    case 'DELETE_POST':
    case 'VOTE_POST':
      return {
        ...state,
        post: action.post
      }
    default:
      return state
  }
}

export default post
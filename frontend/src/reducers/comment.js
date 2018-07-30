const comment = (state = {}, action ) => {
  switch (action.type) {
    case 'GET_COMMENT':
    case 'ADD_COMMENT':
    case 'EDIT_COMMENT':
    case 'DELETE_COMMENT':
    case 'VOTE_COMMENT':
      return action.comment
    default:
      return state
  }
}

export default comment
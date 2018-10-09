const posts = (state = [], action) => {
  switch(action.type) {
    case 'GET_POSTS':
        return [...action.posts];
      case 'ADD_POST':
        return [ ...state, action.post ];
    case 'VOTE_UP':
      return [...state, state.map(p => p.id === action.vote.id ? p.voteScore + 1 : action.vote.voteScore)]
      case 'DELETE_POST':
          return  [...state, state.filter(p => p.id !== action.id)]
    default:
      return state
  }
}

export default posts
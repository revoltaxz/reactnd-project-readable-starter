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
    case 'EDIT_POST':
      return state.map(p => p.id === action.payload.id ? action.payload : p)
    case 'GET_POSTS_BY_CATEGORY':
      return [...action.data]
    case 'DELETE_POSTS':
      return []
    default:
      return state
  }
}

export default posts
const initialState = {
  commentsList: []
}

const comments = (state = initialState , action) => {
  switch(action.type) {
    case 'GET_COMMENTS':
     return { ...state, commentsList: action.payload.sort((a,b) => b.voteScore - a.voteScore)}
    case 'VOTE_COMMENT':
      return {
        ...state,
        commentsList: state.commentsList.map(c =>
          c.id === action.payload.id ? c.voteScore + 1 : action.payload.voteScore
        )}
    case 'DELETE_COMMENT':
      return  {...state, commentsList: state.commentsList.filter(c => c.id !== action.payload.id)}
    default:
      return state
  }
}

export default comments
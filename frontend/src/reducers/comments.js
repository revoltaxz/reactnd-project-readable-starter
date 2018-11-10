const initialState = {
  commentsList: []
}

const comments = (state = initialState , action) => {
  switch(action.type) {
    case 'GET_COMMENTS':
     return { ...state, commentsList: action.payload }
    default:
      return state
  }
}

export default comments
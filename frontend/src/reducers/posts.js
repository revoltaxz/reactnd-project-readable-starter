const initialState = {
  postList: [],
  filterBy: '',
  sortBy: 'vote_asc'
}

const posts = (state = initialState , action) => {
  switch(action.type) {
    case 'GET_ALL_POSTS':
      return { ...state, postList: action.payload, filterBy: '' } ;
    case 'ADD_POST':
      return { ...state, ...state.postList.push(action.payload)}
    case 'VOTE_UP':
      return { ...state, postList: state.postList.map(p => p.id === action.payload.id ? p.voteScore + 1 : action.payload.voteScore)}
    case 'DELETE_POST':
      return  {...state, postList: state.postList.filter(p => p.id !== action.payload.id)}
    case 'EDIT_POST':
      return { ...state, postList: state.postList.map(p => p.id === action.payload.id ? action.payload : p)}
    case 'GET_POSTS_BY_CATEGORY':
      return { ...state, postList: action.payload, filterBy: action.category }
    case 'DELETE_POSTS':
      return []
    default:
      return state
  }
}

export default posts
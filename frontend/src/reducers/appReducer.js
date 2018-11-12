const initialState = {
  typeSort: 'voteScore'
}

export const appReducer = (state = initialState, action ) => {
  switch (action.type) {
    case 'CHANGE_ORDER':
      return {
        ...state, typeSort: action.typeOrder
      }
    default:
      return state
  }
}
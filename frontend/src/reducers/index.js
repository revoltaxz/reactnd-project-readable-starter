import { combineReducers } from 'redux'
import comments from './comments'
import comment from './comment'
import categories from './categories'
import posts from './posts'
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
  comment, comments, categories,
  posts,
  form: formReducer
})


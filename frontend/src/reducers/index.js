import { combineReducers } from 'redux'
import comments from './comments'
import comment from './comment'
import categories from './categories'
import posts from './posts'


export default combineReducers({
  comment, comments, categories,
  posts,
})


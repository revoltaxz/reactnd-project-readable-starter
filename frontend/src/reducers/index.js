import { combineReducers } from 'redux'
import comments from './comments'
import comment from './comment'
import categories from './categories'
import posts from './posts'
import post from './post'

export default combineReducers({
  comment, comments, categories,
  post, posts,
})


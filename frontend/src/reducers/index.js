import combineReducers from 'redux'
import comments from './comments'
import categories from './categories'
import posts from './posts'

export const rootReducer = combineReducers({
  comments,
  categories,
  posts
})
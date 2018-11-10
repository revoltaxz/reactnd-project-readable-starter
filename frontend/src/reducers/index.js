import { combineReducers } from 'redux'
import comments from './comments'
import categories from './categories'
import posts from './posts'
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
  comments, categories, posts,
  form: formReducer
})


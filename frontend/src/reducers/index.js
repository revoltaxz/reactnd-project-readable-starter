import { combineReducers } from 'redux'
import comments from './comments'
import categories from './categories'
import posts from './posts'
import { appReducer } from "./appReducer";

export default combineReducers({
  comments, categories, posts,
  appReducer,
})


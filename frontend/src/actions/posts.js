import axios from 'axios'
import {history} from '../utils/history'
const URL = 'http://localhost:3001'

export const getAllPosts = () => {
  return dispatch => {
    axios({
      method: 'GET',
      url: `${URL}/posts`,
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Whatever'}
    }).then( resp => {
      dispatch(getPosts(resp.data))
    })
  }
}

function getPosts (posts) {
  return {
    type: 'GET_POSTS',
    posts
  }
}



export const addPost = ( post ) => {
  return dispatch => {
    axios({
      method: 'POST',
      url: `${URL}/posts`,
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Whatever'},
      data: JSON.stringify(post)
    }).then( resp => {
      dispatch(newPost(resp.data))
      history.push('/')
    }).then(resp => {
      dispatch(getAllPosts())
    })
  }
}

function newPost (post) {
  return {
    type: 'ADD_POST',
    post
  }
}

export const deletePost = (post) => {
  return dispatch => {
    axios({
        method: 'delete',
        url: `${URL}/posts/${post.id}`,
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Whatever'},
    }).then(resp => {
      dispatch(delPost(resp.data))
    }).then(resp => {
      dispatch(getAllPosts())
    })
  }
}

function delPost (post) {
  return {
    type: 'DELETE_POST',
    post
  }
}

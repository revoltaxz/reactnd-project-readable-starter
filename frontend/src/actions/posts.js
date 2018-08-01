import axios from 'axios'

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
    }).then(dispatch(getAllPosts()))
  }
}

function newPost (post) {
  return {
    type: 'ADD_POST',
    post
  }
}


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
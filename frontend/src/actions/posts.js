import axios from 'axios'
const URL = 'http://localhost:3001'

export const getAllPosts = () => {
  return dispatch => {
    axios({
      method: 'GET',
      url: `${URL}/posts`,
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Whatever'}
    }).then( resp => {
      dispatch({ type: 'GET_ALL_POSTS', payload: resp.data })
    })
  }
}

export const addPost = ( post ) => {
  return (dispatch, getState ) => {
    const { posts } = getState()
    axios({
      method: 'POST',
      url: `${URL}/posts`,
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Whatever'},
      data: JSON.stringify(post)
    }).then( resp => {
      dispatch({ type: 'ADD_POST', payload: resp.data })
    }).then(resp => {
      if ( posts.filterBy ===  '') {
        dispatch(getAllPosts())
      }
      else {
        dispatch(getPostByCategory(posts.filterBy))
      }
    })
  }
}

export const deletePost = (post) => {
  return (dispatch, getState) => {
    const { posts } = getState()
    axios({
        method: 'delete',
        url: `${URL}/posts/${post.id}`,
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Whatever'},
    }).then(resp => {
      dispatch({ type: 'DELETE_POST', payload: resp.data })
    }).then(resp => {
      if ( posts.filterBy ===  '') {
        dispatch(getAllPosts())
      }
      else {
        dispatch(getPostByCategory(posts.filterBy))
      }
    })
  }
}

export const vote = ( post, type ) => {
  return (dispatch, getState ) => {
    const { posts } = getState()
    axios({
      method: 'POST',
      url: `${URL}/posts/${post.id}`,
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Whatever'},
      data: JSON.stringify({option: type})
    }).then( resp => {
      dispatch({ type: 'VOTE_UP', payload: resp.data })
    }).then( resp => {
      if ( posts.filterBy ===  '') {
        dispatch(getAllPosts())
      }
      else {
        dispatch(getPostByCategory(posts.filterBy))
      }
    })
  }
}


export const getPostByCategory = (category) => {
  return dispatch => {
    axios({
      method: 'GET',
      url: `${URL}/${category}/posts`,
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Whatever'},
    }).then( resp => {
      dispatch({ type: 'GET_POSTS_BY_CATEGORY', payload: resp.data, category })
    })
  }
}


export const editPost = post => {
  return (dispatch, getState ) => {
    const { posts } = getState()
    axios({
      method: 'PUT',
      url: `${URL}/posts/${post.id}`,
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Whatever'},
      data: JSON.stringify( post )
    }).then( resp => {
      dispatch({ type: 'EDIT_POST', payload: resp.data })
    }).then( resp => {
      if ( posts.filterBy ===  '') {
        dispatch(getAllPosts())
      }
      else {
        dispatch(getPostByCategory(posts.filterBy))
      }
    })
  }
}

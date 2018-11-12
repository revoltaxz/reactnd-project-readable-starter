import axios from 'axios'
const URL = 'http://localhost:3001'

export const getComments = (id_post) => {
  return dispatch => {
    axios({
      method: 'GET',
      url: `${URL}/posts/${id_post}/comments`,
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Whatever'}
    }).then( resp => {
      dispatch({ type: 'GET_COMMENTS', payload: resp.data })
    })
  }
}

export const addComment = ( comment, post_id) => {
  return (dispatch ) => {
    axios({
      method: 'POST',
      url: `${URL}/comments`,
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Whatever'},
      data: JSON.stringify( comment )
    }).then( resp => {
      dispatch({ type: 'ADD_COMMENT', payload: resp.data })
    }).then( resp => {
      dispatch(getComments(post_id))
    })
  }
}



export const voteComment = (id_comment, id_post, type) => {
  return dispatch => {
    axios({
      method: 'POST',
      url: `${URL}/comments/${id_comment}`,
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Whatever'},
      data: JSON.stringify({option: type})
    }).then( resp => {
      dispatch({ type: 'VOTE_COMMENT', payload: resp.data })
    }).then(resp => {
      dispatch(getComments(id_post))
    })
  }
}

export const deleteComment = (id_comment, id_post ) => {
  return dispatch => {
    axios({
      url: `${URL}/comments/${id_comment}`,
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Whatever'},
    }).then( resp => {
      dispatch({ type: 'DELETE_COMMENT', payload: resp.data })
    }).then( resp => {
      dispatch(getComments(id_post))
    })
  }
}

export const editComment = (comment, id_post ) => {
  return dispatch => {
    axios({
      method: 'PUT',
      url: `${URL}/comments/${comment.id}`,
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Whatever'},
      data: JSON.stringify( comment )
    }).then(resp => {
      dispatch({ type: 'EDIT_COMMENT', payload: resp.data })
    }).then(resp => {
      dispatch(getComments(id_post))
    })
  }
}
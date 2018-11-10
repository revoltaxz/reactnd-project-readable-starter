import axios from 'axios'
const URL = 'http://localhost:3001'

export const getComments = (id) => {
  return dispatch => {
    axios({
      method: 'GET',
      url: `${URL}/posts/${id}/comments`,
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Whatever'}
    }).then( resp => {
      dispatch({ type: 'GET_COMMENTS', payload: resp.data })
    })
  }
}

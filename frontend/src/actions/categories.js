import axios from 'axios'

const URL = 'http://localhost:3001'

export const getAllCategories = () => {
  return dispatch => {
    axios({
      method: 'GET',
      url: `${URL}/categories`,
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Whatever'}
    }).then( resp => {
      dispatch(getCategories(resp.data.categories))
    })
  }
}

function getCategories (categories) {
  return {
    type: 'GET_CATEGORIES',
    categories
  }
}
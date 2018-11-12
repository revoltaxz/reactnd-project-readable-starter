import sortBy from 'sort-by'

export const sortPosts = (postArray, typeSort) => {
  return postArray.slice().sort(sortBy(`-${typeSort}`))
}
export default (state = null, action) => {
  switch (action.type) {
    case 'fetch_movies':
      return action.payload || false
    default:
      return state
  }
}

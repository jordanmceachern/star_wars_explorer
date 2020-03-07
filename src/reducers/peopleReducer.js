export default (state = null, action) => {
  switch (action.type) {
    case 'fetch_people':
      return action.payload || false
    default:
      return state
  }
}

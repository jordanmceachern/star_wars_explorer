export default (state = null, action) => {
  switch (action.type) {
    case 'fetch_planets':
      return action.payload || false
    default:
      return state
  }
}

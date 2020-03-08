import { combineReducers } from 'redux'
import peopleReducer from './peopleReducer'
import planetsReducer from './planetsReducer'
import moviesReducer from './moviesReducer'

export default combineReducers({
  people: peopleReducer,
  planets: planetsReducer,
  movies: moviesReducer
})

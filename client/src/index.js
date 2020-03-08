import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'typeface-roboto'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

const reduxStore = createStore(reducers, {}, applyMiddleware(reduxThunk, logger))

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>, document.getElementById('root')
)

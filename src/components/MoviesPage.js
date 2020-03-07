import React, { useEffect } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import MapStateToProps from './MapStateToProps'

const MoviesPage = props => {
  let movies
  useEffect(() => {
    movies = props.fetchMovies()
    console.log('movies: ', movies)
  }, [movies])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '84px' }}>
      [TODO: display movie content]
    </div>
  )
}

export default connect(MapStateToProps, actions)(MoviesPage)

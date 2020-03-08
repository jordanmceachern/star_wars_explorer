import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import MapStateToProps from './MapStateToProps'
import PageContent from './PageContent'
import LoadingSpinner from './LoadingSpinner'
import TheatersIcon from '@material-ui/icons/Theaters'

const MoviesPage = props => {
  useEffect(() => {
    if (!props.movies) {
      props.fetchMovies()
    }
  }, [props])

  const modalData = props.movies
    ? props.movies.map(movie => {
      return ([
        {
          title: 'Movie',
          value: movie.title
        },
        {
          title: 'Director',
          value: movie.director
        },
        {
          title: 'Producers',
          value: movie.producers
        },
        {
          title: 'Release Date',
          value: movie.release_date
        }
      ])
    })
    : null

  const itemTitles = props.movies
    ? props.movies.map(movie => {
      return movie.title
    })
    : null

  const page = props.movies
    ? <PageContent
      modalData={modalData}
      itemTitles={itemTitles}
      avatar={TheatersIcon}
    />
    : <LoadingSpinner />

  return page
}

export default connect(MapStateToProps, actions)(MoviesPage)

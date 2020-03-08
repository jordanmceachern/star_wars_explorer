import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import MapStateToProps from './MapStateToProps'
import PageContent from './PageContent'
import LoadingSpinner from './LoadingSpinner'
import PublicIcon from '@material-ui/icons/Public'

const PlanetsPage = props => {
  useEffect(() => {
    if (!props.planets) {
      props.fetchPlanets()
    }
  }, [props])

  const modalData = props.planets
    ? props.planets.map(planet => {
      return ([
        {
          title: 'Planet',
          value: planet.name
        },
        {
          title: 'Terrain',
          value: planet.terrain
        },
        {
          title: 'Population',
          value: planet.population
        }
      ])
    })
    : null

  const itemTitles = props.planets
    ? props.planets.map(planet => {
      return planet.name
    })
    : null

  const page = props.planets
    ? <PageContent
      modalData={modalData}
      itemTitles={itemTitles}
      avatar={PublicIcon}
      />
    : <LoadingSpinner />

  return page
}

export default connect(MapStateToProps, actions)(PlanetsPage)

import React, { useEffect } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import MapStateToProps from './MapStateToProps'

const PlanetsPage = props => {
  let planets
  useEffect(() => {
    planets = props.fetchPlanets()
    console.log('planets: ', planets)
  }, [planets])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '84px' }}>
      [TODO: display planet content]
    </div>
  )
}

export default connect(MapStateToProps, actions)(PlanetsPage)

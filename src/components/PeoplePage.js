import React, { useEffect } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import MapStateToProps from './MapStateToProps'

const PeoplePage = props => {
  useEffect(() => {
    if (props.people === null) {
      props.fetchPeople()
    }
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '84px' }}>
      [TODO: display people content]
    </div>
  )
}

export default connect(MapStateToProps, actions)(PeoplePage)

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import MapStateToProps from './MapStateToProps'
import PageContent from './PageContent'
import LoadingSpinner from './LoadingSpinner'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const PeoplePage = props => {
  useEffect(() => {
    if (!props.people) {
      props.fetchPeople()
    }
  }, [props])

  const modalData = props.people
    ? props.people.map(person => {
      return ([
        {
          title: 'Name',
          value: person.name
        },
        {
          title: 'Height',
          value: person.height
        },
        {
          title: 'Mass',
          value: person.mass
        },
        {
          title: 'Hair Color',
          value: person.hair_color
        },
        {
          title: 'Skin Color',
          value: person.skin_color
        },
        {
          title: 'Gender',
          value: person.gender
        },
        {
          title: 'Birth Year',
          value: person.birth_year
        }
      ])
    })
    : null

  const itemTitles = props.people
    ? props.people.map(person => {
      return person.name
    })
    : null

  const page = props.people
    ? <PageContent
      modalData={modalData}
      itemTitles={itemTitles}
      avatar={AccountCircleIcon}
    />
    : <LoadingSpinner />

  return page
}

export default connect(MapStateToProps, actions)(PeoplePage)

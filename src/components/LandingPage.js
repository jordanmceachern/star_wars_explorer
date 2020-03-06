import React from 'react'
import Typography from '@material-ui/core/Typography'
import PeopleButtonNav from './PeopleButtonNav'
import MoviesButtonNav from './MoviesButtonNav'
import PlanetsButtonNav from './PlanetsButtonNav'

export default function LandingPage () {
  return (
    <Typography
      component='div'
      style={{
        backgroundColor: '#eeeeee',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'start',
        paddingTop: '64px'
      }}
    >
      <PeopleButtonNav />
      <MoviesButtonNav />
      <PlanetsButtonNav />
    </Typography>
  )
}

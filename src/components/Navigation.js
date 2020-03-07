import React, { Suspense } from 'react'
import Container from '@material-ui/core/Container'
import { Switch, Route } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'
const LandingPage = React.lazy(() => import('./LandingPage'))
const PeoplePage = React.lazy(() => import('./PeoplePage'))
const PlanetsPage = React.lazy(() => import('./PlanetsPage'))
const MoviesPage = React.lazy(() => import('./MoviesPage'))

const Navigation = () => {
  return (
    <Container style={{ maxWidth: '100vw', padding: '0' }}>
      <Switch>
        <Route path='/people'>
          <Suspense fallback={LoadingSpinner()}>
            <PeoplePage />
          </Suspense>
        </Route>
        <Route path='/movies'>
          <Suspense fallback={LoadingSpinner()}>
            <MoviesPage />
          </Suspense>
        </Route>
        <Route path='/planets'>
          <Suspense fallback={LoadingSpinner()}>
            <PlanetsPage />
          </Suspense>
        </Route>
        <Route path='/landing'>
          <Suspense fallback={LoadingSpinner()}>
            <LandingPage />
          </Suspense>
        </Route>
        <Route path='/'>
          <Suspense fallback={LoadingSpinner()}>
            <LandingPage />
          </Suspense>
        </Route>
      </Switch>
    </Container>
  )
}

export default Navigation

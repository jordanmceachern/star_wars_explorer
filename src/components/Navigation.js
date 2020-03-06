import React from 'react'
import Container from '@material-ui/core/Container'
import LandingPage from './LandingPage'
import { Switch, Route } from 'react-router-dom'

const Navigation = () => {
  return (
    <Container style={{ maxWidth: '100vw', padding: '0' }}>
      <Switch>
        <Route path='/people'>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '84px' }}>
                [TODO: display people content]
          </div>
        </Route>
        <Route path='/movies'>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '84px' }}>
                [TODO: display movies content]
          </div>
        </Route>
        <Route path='/planets'>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '84px' }}>
                [TODO: display planets content]
          </div>
        </Route>
        <Route path='/' component={LandingPage} />
      </Switch>
    </Container>
  )
}

export default Navigation

import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar'
import Navigation from './Navigation'
import StyleObject from './StyleObject'

export default function PersistentDrawerLeft () {
  return (
    <div className={StyleObject.root}>
      <Router>
        <CssBaseline />
        <Navbar />
        <Navigation />
      </Router>
    </div>
  )
}

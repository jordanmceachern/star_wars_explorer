import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import People from './People';

export default function LandingPage() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#eeeeee', height: '100vh' }} >
          <People />
        </Typography>
      </Container>
    </>
  )
}
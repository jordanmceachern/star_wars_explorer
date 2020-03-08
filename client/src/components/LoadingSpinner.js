import React from 'react'
import spinnerPng from '../images/loading_spinner.png'

const LoadingSpinner = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ fontSize: '20px', textAlign: 'center', marginBottom: '10px' }}>
        Loading
      </div>
      <div style={{ width: '70px', height: '70px', animation: 'spin 2s linear infinite', transformOrigin: 'center center' }}>
        <style>
          {
          `@keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
          }`
          }
        </style>
        <img src={spinnerPng} style={{ width: '100%', height: '100%' }} alt='page loading' />
      </div>
    </div>
  )
}

export default LoadingSpinner

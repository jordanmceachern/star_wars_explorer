import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { indigo } from '@material-ui/core/colors'

const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(indigo[500]),
      backgroundColor: indigo[500],
      '&:hover': {
        backgroundColor: indigo[700]
      },
      width: '125px',
      margin: '1rem 0 0 1rem'
    },
  }))(Button)

const CustomButton = props => {
  return (
      <ColorButton variant="contained" color="primary">
        {props.children}
      </ColorButton>
  )
}

export default CustomButton
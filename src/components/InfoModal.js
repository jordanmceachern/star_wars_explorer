import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: '64px',
    maxWidth: 360,
    padding: '0',
    backgroundColor: 'rgb(235, 235, 235)',
    borderRight: '1px solid rgb(56, 56, 56)',
    borderBottom: '1px solid rgb(156, 156, 156)'
  },
  modal: {
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '2'
  },
  close: {
    position: 'absolute',
    top: '3px',
    right: '0',
    height: '46px',
    width: '46px',
    zIndex: '3'
  }
}))

const InfoModal = props => {
  const classes = useStyles()
  const renderList = props.modalData.map((data, index) => {
    if (index === 0) {
      return (
        <div key={data.title}>
          <ListItem button>
            <ListItemText>
              <div style={{ fontSize: '20px', fontWeight: '700', textAlign: 'center' }}>
                {data.value}
              </div>
            </ListItemText>
          </ListItem>
          <Divider light />
        </div>
      )
    } else {
      return (
        <div key={data.title}>
          <ListItem button>
            <ListItemText primary={data.title} />
            <ListItemText secondary={data.value} />
          </ListItem>
          <Divider light />
        </div>
      )
    }
  })

  return (
    <List
      component='nav'
      className={`${classes.root} ${classes.modal}`}
      aria-label='mailbox folders'
    >
      <CloseIcon className={classes.close} onClick={props.closeModal} />
      {renderList}
    </List>
  )
}

export default InfoModal

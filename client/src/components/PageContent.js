import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
const InfoModal = React.lazy(() => import('./InfoModal'))

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: '64px',
    padding: '0',
    backgroundColor: theme.palette.background.paper
  },
  margin: {
    marginRight: '15px'
  }
}))

const PageContent = props => {
  const classes = useStyles()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState(null)
  const Avatar = props.avatar
  const toggleModalOpen = () => { setModalOpen(!modalOpen) }
  const renderModal = data => {
    toggleModalOpen()
    setModalData(data)
  }
  const renderList = props.itemTitles.map((title, index) => {
    return (
      <div key={title} onClick={() => renderModal(props.modalData[index])}>
        <ListItem button divider>
          <Avatar className={classes.margin} />
          <ListItemText primary={title} />
        </ListItem>
      </div>
    )
  })

  return (
    <>
      {
        modalOpen && (
          <InfoModal modalData={modalData} closeModal={toggleModalOpen} />
        )
      }
      <List
        component='nav'
        className={classes.root}
        aria-label='mailbox folders'
      >
        {renderList}
      </List>
    </>
  )
}

export default PageContent

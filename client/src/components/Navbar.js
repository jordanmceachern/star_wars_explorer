import React from 'react'
import clsx from 'clsx'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Drawer from '@material-ui/core/Drawer'
import { useTheme } from '@material-ui/core/styles'
import { Link, useLocation } from 'react-router-dom'
import StyleObject from './StyleObject'

const Navbar = () => {
  const classes = StyleObject()
  const theme = useTheme()
  const segment = useLocation().pathname
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const pageTitle = () => {
    if ((segment === '/') || (segment === '/landing')) {
      return 'Star Wars Explorer'
    } else {
      let title = segment.substring(1, segment.length)
      title = title.charAt(0).toUpperCase() + title.substring(1)
      return title
    }
  }

  return (
    <>
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            {pageTitle()}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List style={{ paddingLeft: '20px' }}>
          {['landing', 'people', 'movies', 'planets'].map((text) => (
            <Link
              to={`/${text}`}
              key={text}
              onClick={handleDrawerClose}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItem button>
                <ListItemText primary={text.toUpperCase()} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default Navbar

import React, { Component } from 'react'

import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
});

const drawerWidth = 240;

@withStyles(styles)
export default class Header extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { classes, drawerOpen, handleDrawerOpen } = this.props;

    return (
      <AppBar
        position="absolute"
        className={classNames(classes.appBar, drawerOpen && classes.appBarShift)}
      >
        <Toolbar disableGutters={!drawerOpen}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={classNames(classes.menuButton, drawerOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>
            BBS of React and Mobx designed with Material-UI
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
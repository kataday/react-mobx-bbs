import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';
import DrawerMenu from './DrawerMenu';

import { withStyles } from 'material-ui/styles';
// import CssBaseline from 'material-ui/CssBaseline';

const styles = theme => ({
  root: {
    flexGrow: 1,
    // height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
});

@withStyles(styles)
export default class App extends Component {
  constructor(props) {
    super();

    this.state = {
      open: false,
    }
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {/* <React.Fragment> */}
          {/* <CssBaseline /> */}
          <Header
            drawerOpen={this.state.open}
            handleDrawerOpen={this.handleDrawerOpen}
          />
          <DrawerMenu
            drawerOpen={this.state.open}
            handleDrawerClose={this.handleDrawerClose}
          />
          <Main />
        {/* </React.Fragment> */}
      </div>
    );
  }
}
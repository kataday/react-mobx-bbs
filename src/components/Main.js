import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from './Home';
import Settings from './Settings';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    // add
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

@withStyles(styles)
export default class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div style={{width: '50%'}}>
          <Paper className={classes.paper}>
            <Route exact path="/" component={Home} />
            <Route path="/settings" component={Settings} />
          </Paper>
        </div>
      </main>
    );
  }
}
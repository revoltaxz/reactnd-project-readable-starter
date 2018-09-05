import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import CategoriesList from './CategoriesList';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom'

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'fixed',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 16,
    minWidth: 0,
  },
  toolbar: theme.mixins.toolbar,
  button: {
    float: 'right',
    color: '#fff'
  }
});

class Header extends React.Component {
  render() {
    const { classes} = this.props
    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              Readable
            </Typography>
            <Grid container spacing={16}>
              <Grid item xs={11}></Grid>
              <Grid item xs={1}>
                <Link to='/posts/new'>
                  <Tooltip title='Add Post'>
                    <IconButton className={classes.button} aria-label="Delete">
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </Link>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar}/>
          <List><CategoriesList /></List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar}>
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
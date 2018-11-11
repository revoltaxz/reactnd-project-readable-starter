import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import CategoriesList from './CategoriesList';
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NewPost from "../NewPost/NewPost";
import { addPost } from "../../actions/posts";

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'absolute',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    paddingTop: 64,
    paddingLeft: 241,
    minWidth: 0,
  },
  toolbar: theme.mixins.toolbar,
  button: {
    float: 'right',
    color: '#fff'
  }
});

class Header extends React.Component {

  submit = data => {
    this.props.addPost(data)
  }

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
                <NewPost onSubmit={this.submit} />
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

const mapDispatchToProps = dispatch => bindActionCreators({ addPost }, dispatch )

export default withStyles(styles)(connect(null, mapDispatchToProps)(Header));
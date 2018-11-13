import React from 'react'
import { connect } from 'react-redux'

import { addPost } from '../../actions/posts'
import Uuid from 'uuid-lib'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

class NewPost extends React.Component {
  state = {
    open: false,
    title: '',
    author: '',
    category: '',
    body: ''
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = e => {
    e.preventDefault()
    const { title, author, category, body } = this.state
    const { dispatch } = this.props
    const data = {
      id: Uuid.raw(),
      timestamp: Date.now(),
      title,
      author,
      body,
      category
    }
    if ( title && author && category && body ) {
      dispatch(addPost(data))
      this.setState({ open: false })
      this.clearForm()
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  clearForm = () => {
    this.setState({
      title: '',
      category: '',
      author: '',
      body: ''
    })
  }


  render () {
    const { open, body, title, category, author } = this.state
    const { classes } = this.props
    return (
      <React.Fragment>
        <Tooltip title='Add Post'>
          <IconButton style={{color: '#fff', float: 'right'}} onClick={this.handleClickOpen}>
            <AddIcon/>
          </IconButton>
        </Tooltip>
        <Dialog open={open} fullWidth onClose={this.handleClose}  aria-labelledby="form-dialog-title">
          <DialogTitle id="new-post" className={classes.dialogTitle}>New Post</DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.dialogText}>
              Insert data to create a new post
            </DialogContentText>
            <form onSubmit={this.handleSubmit}>
              <Grid container spacing={16}>
                <Grid item xs={6}>
                  <TextField name="title"
                             onChange={this.handleChange}
                             className="fields"
                             variant='outlined'
                             type='text'
                             label='Title'
                             required
                             value={title}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField name="author"
                             onChange={this.handleChange}
                             className="fields"
                             variant='outlined'
                             type="text"
                             required
                             label="Author"
                             value={author}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField name="category"
                             onChange={this.handleChange}
                             className="fields"
                             variant='outlined'
                             select
                             required
                             value={category}
                             label="Category"
                  >
                    {categories.map(cat => (
                      <MenuItem key={cat.value} value={cat.value}>{cat.title}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField name="body"
                             onChange={this.handleChange}
                             className="fields"
                             variant='outlined'
                             multiline
                             rowsMax={4}
                             label='Body'
                             required
                             value={body}
                  />
                </Grid>
              </Grid>
              <DialogActions>
                <Button type="button" onClick={this.handleClose}>
                  Cancel
                </Button>
                <Button variant="contained" type="submit">
                  Create
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>

      </React.Fragment>
    )
  }
}

const styles = {
  fields: {
    width: '100%',
    marginBottom: 16
  },
  dialogText: {
    marginBottom: 36,
    textAlign: 'center'
  },
  dialogTitle: {
    textAlign: 'center'
  }
}

const categories = [
  {value: 'react', title: 'React'},
  {value: 'redux', title: 'Redux'},
  {value: 'udacity', title: 'Udacity'},
]

export default withStyles(styles)(connect()(NewPost))
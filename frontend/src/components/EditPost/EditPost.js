import React from 'react'
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import IconButton from "@material-ui/core/IconButton/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import Grid from "@material-ui/core/Grid/Grid";
import { withStyles } from '@material-ui/core/styles'
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import { editPost } from "../../actions/posts";
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'


class EditPost extends React.Component {
  state = {
    open: false,
    id: '',
    title: '',
    body: ''
  }

  static getDerivedStateFromProps(props, state) {
    if (  props.values.id !== state.id ) {
      return {
        id: props.values.id,
        title: props.values.title,
        body: props.values.body
      }
    }else {
      return { props }
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    const { id, title, body } = this.state
    e.preventDefault()
    const data = { id, title, body }
    const { dispatch } = this.props
    if ( title &&  body ) {
      dispatch(editPost(data))
      this.setState({ open: false })
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  };

  handleClose = () => {
    this.setState({ open: false });
  };



  render () {
    const { classes } = this.props
    const { title, body, open } = this.state
    return (
      <div>
        <Tooltip title='Edit Post'>
          <IconButton className={classes.button}
                      onClick={this.handleClickOpen}
          >
            <EditIcon/>
          </IconButton>
        </Tooltip>
        <Dialog open={open}
                fullWidth
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
        >
          <DialogTitle className={classes.dialogTitle}
                       id="edit-post"
          >
            Edit Post
          </DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.dialogText}>
              Insert data to Edit Post
            </DialogContentText>
            <form onSubmit={this.handleSubmit}>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <TextField name="title"
                             className={classes.fields}
                             variant='outlined'
                             value={title}
                             id="title"
                             type="text"
                             required
                             label='Title'
                             onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="body"
                             className={classes.fields}
                             value={body}
                             id="body"
                             type="text"
                             variant='outlined'
                             required
                             multiline
                             rowsMax={4}
                             label='Body'
                             onChange={this.handleChange}
                  />
                </Grid>
              </Grid>
              <DialogActions>
                <Button type="button" onClick={this.handleClose}>
                  Cancel
                </Button>
                <Button variant="contained" type="submit">
                  Send
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}

const styles = {
  button: {
    float: 'right'
  },
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

export default withStyles(styles)(connect()(EditPost))

import React from 'react'
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import { connect } from 'react-redux'
import { addComment } from "../../actions/comments";
import Uuid from "uuid-lib";
import { withRouter } from 'react-router-dom'

class CommentNew extends React.Component {
  state = {
    author: '',
    body: '',
    open: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, match } = this.props
    const { author, body } = this.state

    const parentId = match.params.post_id
    const data = {
      id: Uuid.raw(),
      timestamp: Date.now(),
      body,
      author,
      parentId,
    }

    dispatch(addComment(data, parentId))
    this.setState({ open: false })
  }


  handleClickOpen = () => {
    this.setState({ open: true })
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render () {
    const { author, body, open } = this.state
    console.log(this.props)
    return (
      <div>
        <Button variant="contained" style={{ float: 'right '}} onClick={this.handleClickOpen}>
          New Comment
        </Button>
        <Dialog open={open}
                fullWidth
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
        >
          <DialogTitle style={{ textAlign: 'center' }} id="edit-post">
            New Comment
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ marginBottom: 36, textAlign: 'center'}}>
              Insert data to New Comment
            </DialogContentText>
            <form onSubmit={this.handleSubmit}>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <TextField name="author"
                             className="fields"
                             variant='outlined'
                             value={author}
                             id="author"
                             type="text"
                             label='Your name'
                             onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="body"
                             className="fields"
                             value={body}
                             id="body"
                             type="text"
                             variant='outlined'
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


export default withRouter(connect()(CommentNew))
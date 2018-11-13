import React from 'react'
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import IconButton from "@material-ui/core/IconButton/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import { connect } from 'react-redux'
import { editComment } from "../../actions/comments";

class EditComment extends React.Component {
  state = {
    id: '',
    author: '',
    body: '',
    parentId: '',
    open: false
  }

  static getDerivedStateFromProps(props, state) {
    if (  props.values.id !== state.id ) {
      return {
        id: props.values.id,
        author: props.values.author,
        body: props.values.body,
        parentId: props.values.parentId
      }
    } else {
      return { props }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { id, author, body, parentId } = this.state
    const data = { id, author, body }

    if ( author && body ) {
      dispatch(editComment(data, parentId))
      this.setState({ open: false })
    }
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
    return (
      <div>
        <Tooltip title='Edit Post'>
          <IconButton style={{ float: 'right '}} onClick={this.handleClickOpen}>
            <EditIcon/>
          </IconButton>
        </Tooltip>
        <Dialog open={open}
                fullWidth
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
        >
          <DialogTitle style={{ textAlign: 'center' }} id="edit-post">
            Edit Comment
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ marginBottom: 36, textAlign: 'center'}}>
              Insert data to Edit Comment
            </DialogContentText>
            <form onSubmit={this.handleSubmit}>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <TextField name="author"
                             className="fields"
                             variant='outlined'
                             disabled
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
                             required
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



export default connect()(EditComment)
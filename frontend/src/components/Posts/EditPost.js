import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllPosts } from '../../actions/posts'
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
import { Field, reduxForm} from "redux-form";
import { TextField } from 'redux-form-material-ui'


class EditPost extends React.Component {
  state = {
    open: false
  }

  componentDidMount() {
    this.handleInitialize()
    this.props.getAllPosts()
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  handleInitialize () {
    const initData = {
      "id": this.props.id,
      "title": this.props.title,
      "body": this.props.body,
    }
    this.props.initialize(initData)
  }


  render () {
    const { handleSubmit, pristine, reset, submitting, classes } = this.props
    return (
      <React.Fragment>
        <Tooltip title='Edit Post'>
          <IconButton style={{ float: 'right'}} onClick={this.handleClickOpen}>
            <EditIcon/>
          </IconButton>
        </Tooltip>
        <Dialog open={this.state.open} fullWidth onClose={this.handleClose}  aria-labelledby="form-dialog-title">
          <DialogTitle className={classes.dialogTitle} id="new-post">Edit Post</DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.dialogText}>
              Insert data to Edit Post
            </DialogContentText>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <Field name="title" className={classes.fields} variant='outlined' component={TextField} type="text" label='Title' />
                </Grid>
                <Grid item xs={12}>
                  <Field name="body" className={classes.fields} component={TextField} variant='outlined' multiline rowsMax={4} label='Body' />
                </Grid>
              </Grid>
              <DialogActions>
                <Button type="button" disabled={pristine || submitting} onClick={reset}>
                  Limpar
                </Button>
                <Button onClick={this.handleClose} variant="contained" type="submit" disabled={pristine || submitting}>
                  Enviar
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


EditPost = reduxForm({
  form: "editPost",
})(EditPost);

const mapStateToProps = ({ post }) => ({ post })
const mapDispatchToProps = dispatch => bindActionCreators({ getAllPosts }, dispatch)

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(EditPost))

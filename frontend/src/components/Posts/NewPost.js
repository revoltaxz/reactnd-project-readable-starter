import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
import { Field, reduxForm} from "redux-form";
import { withStyles } from '@material-ui/core/styles'
import { TextField } from 'redux-form-material-ui'

class NewPost extends React.Component {
  state = {
    open: false
  }

  componentDidMount() {
    this.handleInitialize()
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  handleInitialize () {
    const initData = {
      "id": Uuid.raw(),
      "timestamp": Date.now()
    }
    this.props.initialize(initData)
  }



  render () {
    const { handleSubmit, pristine, reset, submitting, classes } = this.props
    return (
      <React.Fragment>
        <Tooltip title='Add Post'>
          <IconButton style={{color: '#fff', float: 'right'}} onClick={this.handleClickOpen}>
            <AddIcon/>
          </IconButton>
        </Tooltip>
        <Dialog open={this.state.open} fullWidth onClose={this.handleClose}  aria-labelledby="form-dialog-title">
          <DialogTitle id="new-post" className={classes.dialogTitle}>New Post</DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.dialogText}>
              Insert data to create a new post
            </DialogContentText>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={16}>
                <Grid item xs={6}>
                  <Field name="title" className={classes.fields} variant='outlined' component={TextField} type="text" label='Title' />
                </Grid>
                <Grid item xs={6}>
                  <Field name="author" className={classes.fields} variant='outlined' component={TextField} type="text" label='Author' />
                </Grid>
                <Grid item xs={6}>
                  <Field name="category" className={classes.fields} variant='outlined' component={TextField} select label="Category">
                    {categories.map(cat => (
                      <MenuItem key={cat.value} value={cat.value}>{cat.title}</MenuItem>
                    ))}
                  </Field>
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

const categories = [
  {value: 'react', title: 'React'},
  {value: 'redux', title: 'Redux'},
  {value: 'udacity', title: 'Udacity'},
]

NewPost = reduxForm({
  form: "newPost",
})(NewPost);

const mapDispatchToProps = dispatch => bindActionCreators({ addPost }, dispatch)

export default withStyles(styles)(connect(null, mapDispatchToProps)(NewPost))
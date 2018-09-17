import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPost } from '../../actions/posts'
import Uuid from 'uuid-lib'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

class NewPost extends React.Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newPost = {
      id: Uuid.raw(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category,
      timestamp: Date.now()
    }
    this.props.addPost(newPost)
  }

  render () {
    const { title, body, author, category } = this.state
    console.log(title)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <TextField name="title" label="Title" value={title} onChange={this.handleChange}/>
            </Grid>
            <Grid item xs={12}>
              <TextField name="author" label="Author" value={author} onChange={this.handleChange}/>
            </Grid>
            <Grid item xs={12}>
              <TextField name="category" label="Category" value={category} onChange={this.handleChange}/>
            </Grid>
            <Grid item xs={12}>
              <TextField name="body" label="Body" multiline rowsMax="3" value={body} onChange={this.handleChange}/>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">Create</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addPost }, dispatch)

export default connect(null, mapDispatchToProps)(NewPost)
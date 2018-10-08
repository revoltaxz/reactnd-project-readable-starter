import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPost } from '../../actions/posts'
import Uuid from 'uuid-lib'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

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
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={16} style={{ paddingTop: 16}}>
            <Grid item xs={2}></Grid>
            <Grid item xs={7}>
              <Card>
                <CardContent>
                  <Grid container>
                    <Grid item xs={12}>
                      <TextField style={{width: '100%', marginTop: 24}} name="title" label="Title" value={title} onChange={this.handleChange}/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField style={{width: '100%', marginTop: 24}} name="author" label="Author" value={author} onChange={this.handleChange}/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField style={{width: '100%', marginTop: 24}} name="category" label="Category" value={category} onChange={this.handleChange}/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField style={{width: '100%', marginTop: 24}} name="body" label="Body" multiline rowsMax="3" value={body} onChange={this.handleChange}/>
                    </Grid>
                    <Grid item xs={12}>
                      <Button style={{marginTop: 16}} type="submit" variant="contained" color="primary">Create</Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addPost }, dispatch)

export default connect(null, mapDispatchToProps)(NewPost)
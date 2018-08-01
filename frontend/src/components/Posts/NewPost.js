import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPost } from '../../actions/posts'
import Uuid from 'uuid-lib'

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
      <div>
        <form onSubmit={this.handleSubmit}>

          <input type="text" name="title" onChange={this.handleChange} value={title} />
          <textarea type="text" name="body" onChange={this.handleChange} value={body} />
          <input type="text" name="author" onChange={this.handleChange} value={author} />
          <input type="text" name="category" onChange={this.handleChange} value={category} />


          <button>Enviar</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addPost }, dispatch)


export default connect(null, mapDispatchToProps)(NewPost)
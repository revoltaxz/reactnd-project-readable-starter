import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllPosts } from '../../actions/posts'

class EditPost extends React.Component {
  state = {
    title: this.props.title,
    body: this.props.body
  }

  componentDidMount() {
    this.props.getAllPosts()
  }

  render () {
    return (
      <div>
        <form>
          <input type="text" name="title" />
          <textarea type="text" name="body" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ post }) => ({ post })
const mapDispatchToProps = dispatch => bindActionCreators({ getAllPosts }, dispatch)

export default connect(mapStateToProps)(EditPost)

import React from 'react'

import { connect } from 'react-redux'
import { getAllPosts, deletePost } from '../../actions/posts';
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom'


class Posts extends React.Component {

  componentDidMount() {
    this.props.getAllPosts()
  }

  render () {
    const { posts } = this.props
    return (
      <div>
        {posts.map((post,index) => (
          <div key={index}>
            <ul>
              <li>{post.title}</li>
              <li>{post.author}</li>
              <li>{post.category}</li>
              <li>{post.body}</li>
              <li>{post.voteScore}</li>
            </ul>
            <button onClick={() => this.props.deletePost(post)}>Deletar</button>
          </div>
        ))}
        <Link to="/posts/new">
          <button>
            +
          </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({ posts: state.posts })
const mapDispatchToProps = dispatch => bindActionCreators({ getAllPosts, deletePost }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Posts)
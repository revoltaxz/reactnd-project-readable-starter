import React from 'react'

import { connect } from 'react-redux'
import { getAllPosts } from '../../actions/posts';
import { bindActionCreators } from 'redux'


class Posts extends React.Component {

  componentDidMount() {
    this.getPosts()
  }

  getPosts = () => {
    this.props.getAllPosts()
  }

  render () {
    const { posts } = this.props
    return (
      <div>
        {posts.map((post, i) => (
          <div key={i}>
            <ul>
              <li>{post.title}</li>
              <li>{post.author}</li>
              <li>{post.category}</li>
              <li>{post.body}</li>
              <li>{post.voteScore}</li>
            </ul>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({ posts })
const mapDispatchToProps = dispatch => bindActionCreators({ getAllPosts }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Posts)
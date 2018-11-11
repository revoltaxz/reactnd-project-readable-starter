import React from 'react'
import { connect } from 'react-redux'
import { getAllPosts, getPostByCategory } from '../../actions/posts';
import { bindActionCreators } from 'redux'
import Grid from '@material-ui/core/Grid'
import Post from "../Post/Post";

class Posts extends React.Component {

  componentDidMount() {
    const { getAllPosts, getPostByCategory, match } = this.props
    if (!match.params.category) {
      getAllPosts()
    }
    else {
      const filterPosts = this.props.match.params.hasOwnProperty('category') ? this.props.match.params.category : ''
      if(filterPosts === '' || filterPosts === 'all' ) getAllPosts()
      else getPostByCategory(filterPosts)
    }
  }


  render () {
    const { posts } = this.props
    return (
      <Grid container spacing={16} className="grid-content">
        {posts.map((post, index) => (
          <Post {...post}
                key={index}
          />
        ))}
      </Grid>
    )
  }
}


const mapStateToProps = state => ({ posts: state.posts.postList })
const mapDispatchToProps = dispatch => bindActionCreators({ getAllPosts, getPostByCategory }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
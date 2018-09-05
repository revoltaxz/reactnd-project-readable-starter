import React from 'react'

import { connect } from 'react-redux'
import { getAllPosts, deletePost } from '../../actions/posts';
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles'


class Posts extends React.Component {

  componentDidMount() {
    this.props.getAllPosts()
  }

  render () {
    const { posts, classes } = this.props
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
      </div>
    )
  }
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

const mapStateToProps = state => ({ posts: state.posts })
const mapDispatchToProps = dispatch => bindActionCreators({ getAllPosts, deletePost }, dispatch)


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Posts))
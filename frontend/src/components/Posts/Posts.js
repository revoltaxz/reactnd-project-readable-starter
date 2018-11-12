import React from 'react'
import { connect } from 'react-redux'
import { getAllPosts, getPostByCategory } from '../../actions/posts';
import { changeOrder } from "../../actions/appActions";
import { bindActionCreators } from 'redux'
import Grid from '@material-ui/core/Grid'
import Post from "../Post/Post";
import { sortPosts } from "../../helpers/sortPosts";
import Typography from '@material-ui/core/Typography'
import NoPosts from "../NoPosts/NoPosts";

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
    const { posts, changeOrder } = this.props
    return (
      <Grid container spacing={16} className="grid-content">
        {
          posts.length !== 0 ?
            <React.Fragment>
            <Grid item xs={12}>
              <Typography variant="h6">Order By</Typography>
              <select onChange={(e) => changeOrder(e.target.value)}>
                <option value="voteScore">vote</option>
                <option value="timestamp">date</option>
              </select>
            </Grid>
              {posts.map((post, index) => (
              <Post {...post}
                    key={index}
              />
            ))}
            </React.Fragment> : <NoPosts />
        }
      </Grid>
    )
  }
}


const mapStateToProps = state => ({
  posts: sortPosts(state.posts.postList, state.appReducer.typeSort)
})

const mapDispatchToProps = dispatch => bindActionCreators({ getAllPosts, getPostByCategory, changeOrder }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
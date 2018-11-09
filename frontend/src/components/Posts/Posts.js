import React from 'react'
import { connect } from 'react-redux'
import { getAllPosts, deletePost, vote, getPostByCategory, editPost } from '../../actions/posts';
import { bindActionCreators } from 'redux'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Up from '@material-ui/icons/KeyboardArrowUp'
import Down from '@material-ui/icons/KeyboardArrowDown'
import EditPost from "./EditPost";

class Posts extends React.Component {

  componentDidMount() {
    const { getAllPosts, getPostByCategory, match } = this.props
    if (!match.params.category) {
      getAllPosts()
    }
    else {
      const filterPosts = this.props.match.params.hasOwnProperty('category') ? this.props.match.params.category : ''
      if(filterPosts === '' ||  filterPosts === 'all' ) getAllPosts()
      else getPostByCategory(filterPosts)
    }
  }

  edit = data => {
    this.props.editPost(data)
  }

  render () {
    const { posts, classes, vote } = this.props
    return (
      <React.Fragment>
        <Grid container spacing={16} className={classes.gridContent}>
          {posts.map((post,index) => (
            <Grid item xs={12} key={index}>
              <Card>
                <CardContent>
                  <Grid container>
                    <Grid item xs={1}>
                      <Grid container direction="column" alignItems="flex-start">
                        <Button onClick={() => vote(post, 'upVote' )}><Up /></Button>
                        <span style={{ paddingLeft: 25.5 }}>{post.voteScore}</span>
                        <Button onClick={() => vote(post, 'downVote' )}><Down /></Button>
                      </Grid>
                    </Grid>
                    <Grid item xs={9} style={{ marginTop: 12}}>
                      <Typography variant="subtitle1">{post.title} | {post.category} </Typography>
                      <Typography variant="caption">submitted by {post.author} | {post.commentCount} comments</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <IconButton style={{float: 'right'}} onClick={() => this.props.deletePost(post)}><DeleteIcon /></IconButton>
                      <EditPost {...post} onSubmit={this.edit} form={`form-edit-${post.id}`}/>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    )
  }
}

const styles  = {
  gridContent: {
    padding: 16
  }
};

const mapStateToProps = state => ({ posts: state.posts.postList })
const mapDispatchToProps = dispatch => bindActionCreators({ getAllPosts, deletePost, vote, getPostByCategory, editPost }, dispatch)


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Posts))
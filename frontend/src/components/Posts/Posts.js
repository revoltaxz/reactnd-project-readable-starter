import React from 'react'

import { connect } from 'react-redux'
import { getAllPosts, deletePost, deletePosts, vote, getPostByCategory, editPost } from '../../actions/posts';
import { bindActionCreators } from 'redux'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import InfoLabel from '../InfoLabel/InfoLabel'
import Like from '@material-ui/icons/ThumbUp'
import Deslike from '@material-ui/icons/ThumbDown'
import { withRouter } from 'react-router-dom'
import EditPost from "./EditPost";

class Posts extends React.Component {

  componentDidMount() {
    if (this.props.posts.length > 0) {
      this.props.deletePosts()
    }
    this.props.getAllPosts()
  }

  edit = data => {
    this.props.editPost(data)
    console.log(data)
  }

  render () {
    const { posts, classes, vote, match } = this.props
    const filterPosts = posts.filter(post => {
      if (match.params.category) {
        return post.category === match.params.category
      }
      return post.category !== match.params.category
    })
    return (
      <React.Fragment>
        <Grid container spacing={16} className={classes.gridContent}>
          {filterPosts.map((post,index) => (
            <Grid item xs={6} key={index}>
              <Card>
                <CardContent>
                  <Grid container>
                    <Grid item xs={9} style={{ marginTop: 12}}>
                      <Typography variant="title">{post.title}</Typography>
                      <Typography variant="caption">{post.author}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <IconButton style={{float: 'right'}} onClick={() => this.props.deletePost(post)}><DeleteIcon /></IconButton>
                      <EditPost {...post} onSubmit={this.edit} form={`form-edit-${post.id}`}/>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardContent>
                  <Grid container>
                    <Grid item xs={6}>
                      <InfoLabel label="Category" data={post.category} />
                    </Grid>
                    <Grid item xs={6}>
                      <InfoLabel label="Vote Score" data={post.voteScore} />
                    </Grid>
                    <Grid item xs={12}>
                      <InfoLabel label="Body" data={post.body} />
                    </Grid>
                  </Grid>
                </CardContent>
                <CardContent>
                  <IconButton style={{ float: 'right' }} onClick={() => vote(post, 'upVote')}><Like /></IconButton>
                  <IconButton style={{ float: 'right' }} onClick={() => vote(post, 'downVote')}><Deslike /></IconButton>
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

const mapStateToProps = state => ({ posts: state.posts.sort((a,b) =>  b.voteScore - a.voteScore)  })
const mapDispatchToProps = dispatch => bindActionCreators({ getAllPosts, deletePost, vote, getPostByCategory, deletePosts, editPost }, dispatch)


export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Posts)))
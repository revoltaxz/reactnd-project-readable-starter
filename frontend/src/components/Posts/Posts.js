import React from 'react'

import { connect } from 'react-redux'
import { getAllPosts, deletePost, vote } from '../../actions/posts';
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom'
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

class Posts extends React.Component {

  componentDidMount() {
    this.props.getAllPosts()
  }

  render () {
    const { posts, classes, vote } = this.props
    return (
      <React.Fragment>
        <Grid container spacing={16} className={classes.gridContent}>
          {posts.map((post,index) => (
            <Grid item xs={6} key={index}>
              <Card>
                <CardContent>
                  <Grid container>
                    <Grid item xs={11} style={{ marginTop: 12}}>
                      <Typography variant="title">{post.title}</Typography>
                      <Typography variant="caption">{post.author}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton onClick={() => this.props.deletePost(post)}><DeleteIcon /></IconButton>
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

const styles = theme => ({

  gridContent: {
    padding: 16
  }
});

const mapStateToProps = state => ({ posts: state.posts })
const mapDispatchToProps = dispatch => bindActionCreators({ getAllPosts, deletePost, vote }, dispatch)


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Posts))
import React from 'react'
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import Up from "@material-ui/icons/KeyboardArrowUp";
import Down from "@material-ui/icons/KeyboardArrowDown";
import Typography from "@material-ui/core/Typography/Typography";
import IconButton from "@material-ui/core/IconButton/IconButton";
import EditPost from "../EditPost/EditPost";
import Divider from "@material-ui/core/Divider/Divider";
import DeleteIcon from "@material-ui/icons/Delete";
import Comments from "../Comments/Comments";
import { vote, deletePost, postDetail } from "../../actions/posts";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CommentNew from "../CommentNew/CommentNew";
import NoRoute from "../NoRoute/NoRoute";

class PostDetail extends React.Component {

  componentDidMount() {
    const { postDetail, match } = this.props
    postDetail(match.params.post_id)
  }

  render () {
    const { postData, vote, deletePost } = this.props
     if ( !postData.hasOwnProperty('id') ) {
       return <NoRoute/>
     }
    return (
      <React.Fragment>
        {postData.hasOwnProperty(('id')) && (
          <Grid container className="grid-content">
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={1}>
                  <Grid container direction="column" alignItems="flex-start">
                    <Button onClick={() => vote(postData.id, 'upVote' )}><Up /></Button>
                    <Typography variant="subtitle2" className="vote-score">{postData.voteScore}</Typography>
                    <Button onClick={() => vote(postData.id, 'downVote' )}><Down /></Button>
                  </Grid>
                </Grid>
                <Grid item xs={9} style={{ marginTop: 12}}>
                  <Typography variant="subtitle1">
                    {postData.title} | {postData.category}
                  </Typography>
                  <Typography variant="caption">
                    submitted by {postData.author} | { postData.commentCount } comments
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <IconButton style={{float: 'right'}} onClick={() => deletePost(postData)}>
                    <DeleteIcon />
                  </IconButton>
                  <EditPost values={{
                    id: postData.id,
                    title: postData.title,
                    body: postData.body
                  }} />
                </Grid>
              </Grid>
            </Grid>
            <Typography variant="subtitle1" style={{ marginTop: 16, fontWeight: '100' }}>{postData.body}</Typography>
            <Divider  style={{ marginTop: 24, marginBottom: 24, width: '100%' }}/>
            <Grid container spacing={16} className="grid-content">
              <Grid item xs={10}>
                <Typography variant="h6" style={{ paddingLeft: 16 }}>Comments ({postData.commentCount})</Typography>
              </Grid>
              <Grid item xs={2}>
                <CommentNew />
              </Grid>
            </Grid>
            <Comments />
          </Grid>
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ postData: state.posts.postInfo })
const mapDispatchToProps = dispatch => bindActionCreators({ vote, deletePost, postDetail }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postDetail, vote, editPost, deletePost } from "../../actions/posts";
import Grid from '@material-ui/core/Grid'
import Button from "@material-ui/core/Button/Button";
import Up from "@material-ui/icons/KeyboardArrowUp";
import Typography from "@material-ui/core/Typography/Typography";
import IconButton from "@material-ui/core/IconButton/IconButton";
import EditPost from "./EditPost";
import Down from '@material-ui/icons/KeyboardArrowDown'
import DeleteIcon from '@material-ui/icons/Delete'
import Divider from '@material-ui/core/Divider'
import Comments from "../Comments/Comments";

class InfoPost extends React.Component {

  componentDidMount () {
    const { match, postDetail } = this.props
    postDetail(match.params.post_id)
  }


  render() {
    const { postInfos, vote, deletePost } = this.props
    return (
      <React.Fragment>
        {postInfos && (
          <Grid container style={{ padding: 16 }}>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={1}>
                  <Grid container direction="column" alignItems="flex-start">
                    <Button onClick={() => vote(postInfos, 'upVote' )}><Up /></Button>
                    <Typography variant="subtitle2" style={{ paddingLeft: 28 }}>{postInfos.voteScore}</Typography>
                    <Button onClick={() => vote(postInfos, 'downVote' )}><Down /></Button>
                  </Grid>
                </Grid>
                <Grid item xs={9} style={{ marginTop: 12}}>
                  <Typography variant="subtitle1">
                    {postInfos.title} | {postInfos.category}
                  </Typography>
                  <Typography variant="caption">submitted by {postInfos.author} | { postInfos.commentCount } comments</Typography>
                </Grid>
                <Grid item xs={2}>
                  <IconButton style={{float: 'right'}} onClick={() => deletePost(postInfos)}><DeleteIcon /></IconButton>
                  <EditPost values={{
                    id: postInfos.id,
                    title: postInfos.title,
                    body: postInfos.body
                  }} />
                </Grid>
              </Grid>
            </Grid>
            <Typography variant="subtitle1" style={{ marginTop: 16, fontWeight: '100' }}>{postInfos.body}</Typography>
            <Divider  style={{ marginTop: 24, marginBottom: 24, width: '100%' }}/>
            <Typography variant="h6" style={{ paddingLeft: 16 }}>Comments ({postInfos.commentCount})</Typography>
            <Comments />
          </Grid>

        )}

      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ postInfos: state.posts.postInfo })
const mapDispatchToProps = dispatch => bindActionCreators({ postDetail, editPost, vote, deletePost }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InfoPost)
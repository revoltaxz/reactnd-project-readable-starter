import React from 'react'
import Card from "@material-ui/core/Card/Card";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import Up from "@material-ui/icons/KeyboardArrowUp";
import Down from "@material-ui/icons/KeyboardArrowDown";
import Typography from "@material-ui/core/Typography/Typography";
import { voteComment, deleteComment } from "../../actions/comments";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import moment from 'moment'
import EditComment from "../EditComment/EditComment";

class Comment extends React.Component {
  render () {
    const { voteScore, author, timestamp, body, voteComment, id, parentId, deleteComment } = this.props
    return (
      <Grid item xs={12}>
        <Card>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={1}>
                <Grid container direction="column" alignItems="flex-start">
                  <Button onClick={() => voteComment(id, parentId, 'upVote')}>
                    <Up />
                  </Button>
                  <Typography variant="subtitle2" className="vote-score">
                    {voteScore}
                  </Typography>
                  <Button onClick={() => voteComment(id, parentId, 'downVote')}>
                    <Down />
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={9} style={{ marginTop: 12}}>
                <Typography variant="subtitle1">
                  {author} | {moment(timestamp).fromNow()}
                </Typography>
                <Typography variant="subtitle1">
                  {body}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton style={{float: 'right'}} onClick={() => deleteComment(id, parentId)}>
                  <DeleteIcon />
                </IconButton>
                <EditComment values={{
                  id: id,
                  author: author,
                  body: body,
                  parentId: parentId
                }}/>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ voteComment, deleteComment }, dispatch)

export default connect(null, mapDispatchToProps)(Comment)
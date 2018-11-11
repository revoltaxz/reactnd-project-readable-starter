import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getComments } from "../../actions/comments";
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Comment from "../Comment/Comment";

class Comments extends React.Component {

  componentDidMount() {
    const { getComments, match } = this.props
    getComments(match.params.post_id)
  }

  render () {
    const { comment } = this.props
    return (
      <React.Fragment>
        <Grid container className="grid-content" spacing={16}>
          { comment && comment.map((com, index) => (
            <Comment { ...com } key={index} />
          ))}
        </Grid>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ comment : state.comments.commentsList })
const mapDispatchToProps = dispatch => bindActionCreators({ getComments }, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments))
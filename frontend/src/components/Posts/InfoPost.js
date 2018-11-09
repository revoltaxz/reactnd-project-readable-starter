import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postDetail } from "../../actions/posts";

class InfoPost extends React.Component {

  componentDidMount () {
    const { match, postDetail } = this.props
    postDetail(match.params.post_id)
  }

  render() {
    const { postInfo } = this.props
    return (
      <React.Fragment>
        {postInfo !== null && postInfo && (
          <div>{postInfo.title}</div>
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ postInfo: state.posts.postInfo })
const mapDispatchToProps = dispatch => bindActionCreators({ postDetail }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InfoPost)
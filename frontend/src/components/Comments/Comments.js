import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getComments } from "../../actions/comments";
import { withRouter } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from "@material-ui/core/Button/Button";
import Up from "@material-ui/icons/KeyboardArrowUp";
import Down from "@material-ui/icons/KeyboardArrowDown";
import IconButton from "@material-ui/core/IconButton/IconButton";
import DeleteIcon from "@material-ui/core/SvgIcon/SvgIcon";
import EditPost from "../Posts/EditPost";

class Comments extends React.Component {

  componentDidMount() {
    const { getComments, match } = this.props
    getComments(match.params.post_id)
  }

  render () {
    const { comment } = this.props
    return (
      <React.Fragment>
        <Grid container style={{ padding: 16 }} spacing={16}>
          { comment && comment.map(com => (
            <Grid key={com.id} item xs={12}>
              <Card>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={1}>
                      <Grid container direction="column" alignItems="flex-start">
                        <Button><Up /></Button>
                        <Typography variant="subtitle2" style={{ paddingLeft: 28 }}>{com.voteScore}</Typography>
                        <Button><Down /></Button>
                      </Grid>
                    </Grid>
                    <Grid item xs={9} style={{ marginTop: 12}}>
                      <Typography variant="subtitle1">
                        {com.author} | {com.timestamp}
                      </Typography>
                      <Typography variant="subtitle1">{com.body}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ comment : state.comments.commentsList })
const mapDispatchToProps = dispatch => bindActionCreators({ getComments }, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments))
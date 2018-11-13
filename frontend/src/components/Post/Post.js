import React from 'react'
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import Up from "@material-ui/icons/KeyboardArrowUp";
import Down from "@material-ui/icons/KeyboardArrowDown";
import { voteDown, voteUp } from "../../actions/posts";
import Typography from "@material-ui/core/Typography/Typography";
import { history } from "../../utils/history";
import { connect } from 'react-redux'
import moment from 'moment'
import { bindActionCreators } from 'redux'
import "./Post.css"

class Post extends React.Component {

  goTo = (category, id) => {
    history.push(`/${category}/${id}`)
  }


  render () {
    const { voteDown, voteUp, id, title, author, voteScore, category, commentCount, timestamp } = this.props
    return (
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container>
              <Grid item xs={1}>
                <Grid container direction="column" alignItems="flex-start">
                  <Button onClick={() => voteUp(id)}>
                    <Up />
                  </Button>
                  <Typography variant="subtitle2" className="vote-score">
                    {voteScore}
                  </Typography>
                  <Button onClick={() => voteDown(id)}>
                    <Down />
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={9} style={{ marginTop: 12}}>
                <Typography variant="subtitle1"
                            className="post-title"
                            onClick={() => this.goTo(category, id)}
                >
                   {title} | {category}
                </Typography>
                <Typography variant="caption">
                  submitted by { author } | { commentCount } comments | { moment(timestamp).fromNow()}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ voteDown, voteUp }, dispatch)
export default connect(null, mapDispatchToProps)(Post)
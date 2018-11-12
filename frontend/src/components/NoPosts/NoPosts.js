import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from "@material-ui/core/Grid/Grid";
import "./NoPosts.css"

class NoPosts extends React.Component {
  render () {
    return (
      <Grid item xs={12}>
        <Card className="no-post-card">
          <CardContent>
            <Typography variant="h6" className="no-post-text">
              No posts found for this category.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}

export default NoPosts
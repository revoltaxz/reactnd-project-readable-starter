import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { history } from "../../utils/history";
import { withStyles } from '@material-ui/core/styles'

class NoRoute extends React.Component {

  handleGoBack = () => {
    history.push('/')
  }

  render () {
    const { classes } = this.props
    return (
      <React.Fragment>
        <Grid container className="grid-content">
          <Grid item xs={3}></Grid>
          <Grid item xs={5} className={classes.positionCard}>
            <Card className={classes.alignContent}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h2">
                  Error 404
                </Typography>
              </CardContent>
              <CardContent className={classes.cardContent}>
                <Button variant="contained" className={classes.goBackButton} onClick={this.handleGoBack}>
                  Back to home
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

const styles = {
  positionCard: {
    marginTop: '10%'
  },
  alignContent: {
    textAlign: 'center'
  },
  cardContent: {
    marginTop: 16
  },
  goBackButton: {
    borderRadius: 36,
    backgroundColor: '#1C3C50',
    color: '#FFF'
  }
}

export default withStyles(styles)(NoRoute)
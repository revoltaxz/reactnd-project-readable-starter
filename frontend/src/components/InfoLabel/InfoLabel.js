import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const InfoLabel = ({ label, data, classes }) => (
  <React.Fragment>
    <Typography className={classes.label} variant="body2">{label}</Typography>
    <Typography variant="body2">{data}</Typography>
  </React.Fragment>
)

const styles = {
  label: {
    color: '#518ca3',
    fontWeight: '400',
    marginTop: 16
  }
}

export default withStyles(styles)(InfoLabel)


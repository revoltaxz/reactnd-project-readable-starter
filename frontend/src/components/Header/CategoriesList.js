import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom'
import ReportIcon from '@material-ui/icons/Report';
import Typography from '@material-ui/core/Typography'
import {bindActionCreators} from "redux";
import {getAllCategories} from "../../actions/categories";
import { connect } from 'react-redux'


class CategoriesList extends React.Component {

  componentDidMount() {
    this.props.getAllCategories()
  }

  render () {
    const { categories } = this.props
    return (
      <div>
        <Typography variant='subheading' style={{ textAlign: 'left', paddingLeft: 24, paddingBottom: 16}}>Categories</Typography>
        <Link to="/">
          <ListItem button >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="All"/>
          </ListItem>
        </Link>
        {categories.map((cat, index)=> (
          <Link to={`/${cat.name}`} key={index}>
            <ListItem button >
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={cat.name} />
            </ListItem>
          </Link>
        ))}
      </div>
    )
  }
};

const mapStateToProps = state => ({ categories: state.categories })
const mapDispatchToProps =  dispatch  => bindActionCreators({ getAllCategories }, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(CategoriesList)
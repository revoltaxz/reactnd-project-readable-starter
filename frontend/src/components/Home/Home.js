import React from 'react'
import { connect } from 'react-redux'
import { getAllCategories } from '../../actions/categories';
import { bindActionCreators } from 'redux'

class Home extends React.Component {

  componentDidMount() {
    this.getCategories()
  }


  getCategories = () => {
    this.props.getAllCategories()
  }

  render() {
    const { categories } = this.props
    return (
      <div>
        <ul>
          { categories.map((cat,index) => (
            <li key={index}>{cat.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => ({ categories })

const mapDispatchToProps =  dispatch  => bindActionCreators({ getAllCategories }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
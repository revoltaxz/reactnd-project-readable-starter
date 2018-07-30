import React from 'react'
import { connect } from 'react-redux'
import { getAllCategories } from '../../actions/categories';
import { getAllPosts } from '../../actions/posts';
import { bindActionCreators } from 'redux'

class Home extends React.Component {

  componentDidMount() {
    this.getCategories()
    this.getPosts()
  }


  getCategories = () => {
    this.props.getAllCategories()
  }

  getPosts = () => {
    this.props.getAllPosts()
  }

  render() {
    const { categories, posts } = this.props
    console.log(posts)
    return (
      <div>
        <ul>
          { categories.map((cat,index) => (
            <li key={index}>{cat.name}</li>
          ))}
          { Array.from(posts).map((p, index) => (
            <li key={index}>{p.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ categories, posts }) => ({ categories, posts })
const mapDispatchToProps =  dispatch  => bindActionCreators({ getAllCategories, getAllPosts }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
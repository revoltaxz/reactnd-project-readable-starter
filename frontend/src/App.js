import React, { Component } from 'react';
import './App.css';

import Home from './components/Home/Home'
import Posts from './components/Posts/Posts'
import NewPost from './components/Posts/NewPost'
import { BrowserRouter as Router, Route  } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/posts/new" component={NewPost} />
          <Route exact path="/posts" component={Posts} />
        </div>
      </Router>
    );
  }
}

export default App;

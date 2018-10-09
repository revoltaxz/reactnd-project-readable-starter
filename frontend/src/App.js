import React, { Component } from 'react';
import './App.css';

import Posts from './components/Posts/Posts'
import NewPost from './components/Posts/NewPost'
import Header from './components/Header/header'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Header>
              <Switch>
                <Route exact path="/" component={Posts} />
                <Route exact path="/new" component={NewPost} />
              </Switch>
            </Header>
          </div>
        </Router>
    );
  }
}

export default App;

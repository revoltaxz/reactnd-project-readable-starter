import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts/Posts'
import Header from './components/Header/Header'
import { Router, Route, Switch  } from 'react-router-dom'
import { history } from "./utils/history";
import PostDetail from "./components/PostDetail/PostDetail";
import NoRoute from "./components/NoRoute/NoRoute";

class App extends Component {
  render() {
    return (
      <Header>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/category/:category" component={Posts} />
            <Route exact path="/category/:category/:post_id" component={PostDetail} />
            <Route component={NoRoute} />
          </Switch>
        </Router>
      </Header>
    );
  }
}

export default App;

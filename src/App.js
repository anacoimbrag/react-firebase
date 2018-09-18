import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Login from './views/login';
import Tasks from './views/tasks';
import Register from './views/register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Tasks} />
            <Route path="/register" component={Register} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

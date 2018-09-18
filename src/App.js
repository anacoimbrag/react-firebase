import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Login from './views/login';
import Tasks from './views/tasks';
import Register from './views/register';
import { auth } from './firebase/firebase';
import { requestPermission, getToken } from './firebase/messaging';

const PrivateRoute = ({ component: Component, ...rest, user }) => (
  <Route {...rest} render={(props) => (
    user
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

class App extends Component {

  state = {
    loading: true,
    user: null
  }

  componentWillMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ loading: false, user })
    })
  }

  componentDidMount() {
    this.notificationPermition()
  }

  notificationPermition = async () => {
    try {
      await requestPermission()
      const token = await getToken()
      console.log(token)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            {!this.state.loading && 
              <PrivateRoute path='/' exact user={this.state.user} component={Tasks} />
            }
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

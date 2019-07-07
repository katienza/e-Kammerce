import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import UserHome from './components/UserHome';
class App extends Component {
  render() {
    return (
      <div id='container'>
        <UserHome />
        <Switch>
          <h1>
            Hello world this is a react app with babel
            loaded
          </h1>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.auth.isLoggedIn,
  };
};

export default withRouter(connect(mapStateToProps)(App));

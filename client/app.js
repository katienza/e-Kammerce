import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import UserHome from './components/UserHome';
class App extends Component {
  render() {
    const {isLoggedIn} = this.props

    return (
      <div id='container'>
        <Switch>
          <Route path='/' component={UserHome} />
          {isLoggedIn && (
            <Switch>
              <h1>
                Hello world this is a react app with babel
                loaded
              </h1>
            </Switch>
          )}
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

/*
 * PROP TYPES
 */
App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

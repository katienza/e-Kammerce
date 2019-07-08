import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import UserHome from './components/UserHome';
import Products from './components/Products/Products';
import ProtectedRoute from './PrivateRoute'

class App extends Component {
  render() {
    return (
      <div id='container'>
        <Switch>
          <Route exact path={'/'} component={UserHome} />
          <ProtectedRoute
            path={'/products'}
            component={Products}
          />
          <Route component={UserHome} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.check.auth.isLoggedIn,
  username: state.user.username,
});

export default withRouter(connect(mapStateToProps)(App));

/*
 * PROP TYPES
 */
App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};

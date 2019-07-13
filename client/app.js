import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import ProtectedRoute from './PrivateRoute';
import UserHome from './components/UserHome';
import Products from './components/Products/Products';
import UsersList from './components/Users/UsersList';
import SingleProduct from './components/Products/SingleProduct';

class App extends PureComponent {
  render() {
    return (
      <div id='container'>
        <Switch>
          <Route exact path={'/'} component={UserHome} />
          <ProtectedRoute
            exact
            path={'/products'}
            component={Products}
          />
          <ProtectedRoute
            path={'/usersList'}
            component={UsersList}
          />
          <ProtectedRoute
            path={'/products/:id'}
            component={SingleProduct}
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

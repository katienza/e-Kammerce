import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class UserHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='login'>
        <form className='login-form'>
          <label className='login-label'>
            Please Log in To enter the site
          </label>
          <p className='login-input'>
            <span className='login-txt'>Enter your name:</span>
            <input
              className='name-input'
              type='text'
              maxlength='255'
              required
            />
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.auth.isLoggedIn,
  };
};

export default connect(mapStateToProps)(UserHome);

/*
 *   PROP TYPES
 */
UserHome.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

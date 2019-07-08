import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  async handleSubmit(event) {
    try {
      event.preventDefault();
      
      const user = this.state.username;
      axios.post('http://localhost:3000/api/', {
        method: 'POST',
        body: user,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      this.props.loginCheck();

      const isAuthenticated = !this.props.isLoggedIn
      localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated))

      this.props.history.push('/products')
      
      this.props.addUser(user)
    } catch (err) {
      console.error(err);
    }
  }

  handleUsernameChange(event) {
    event.preventDefault();
    this.setState({
      username: event.target.value,
    });
  }

  render() {
    return (
      <div className='login'>
        <form
          className='login-form'
          onSubmit={this.handleSubmit}>
          <label className='login-label'>
            Please Log in To enter the site
          </label>
          <p className='login-input'>
            <span className='login-txt'>
              Enter your name:
            </span>
            <input
              className='name-input'
              type='text'
              value={this.state.username}
              maxLength='255'
              onChange={this.handleUsernameChange}
              required
            />
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.check.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  loginCheck: () => dispatch({ type: 'TOGGLE_LOGIN' }),
  addUser: username => dispatch({ type: 'ADD_USER', username })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserHome);

UserHome.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const navbar = props => {
  const onClickHandler = () => {
    props.history.push('/products');
  };

  return (
    <div className='navbar-container'>
      {props.match.params.id ? (
        <button
          className='navbar-btn'
          onClick={() => onClickHandler()}>
          Go Back to the main page
        </button>
      ) : null}
      <p className='copyright'>&copy;2019 Ken Atienza</p>
      <p className='welcome-sign'>
        Welcome, {JSON.parse(localStorage.getItem('user')) || props.username}
      </p>
      <button
        className='userlist-btn'
        onClick={() => props.history.push('/usersList')}>
        See all users
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  username: state.user.username,
});

export default withRouter(connect(mapStateToProps)(navbar));

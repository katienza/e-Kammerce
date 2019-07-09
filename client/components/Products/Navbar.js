import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const navbar = props => {
  return (
    <div>
      <span>
        <h2>Welcome, {props.username}!</h2>
        <button onClick={(() => props.history.push('/usersList'))}>Show All Users</button>
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  username: state.user.username,
});

export default withRouter(connect(mapStateToProps)(navbar));
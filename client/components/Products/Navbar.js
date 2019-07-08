import React from 'react';
import {connect} from 'react-redux';

const navbar = props => {
  return (
    <div>
      <span>
        <p>Welcome, {props.username}!</p>
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  username: state.user.username,
});

export default connect(mapStateToProps)(navbar);

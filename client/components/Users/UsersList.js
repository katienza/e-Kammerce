import React, { Component } from 'react';
import { connect } from 'react-router-dom';
import axios from 'axios';

class UsersList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const { data } = await axios.get('http://localhost:3000/api/usersList');
    const userData = data.map(user => user.body);
    this.setState(state =>
      Object.assign({}, state, {
        users: userData,
      }),
    );
  }

  render() {
    return (
      <div>
        <h1>LIST OF USERS:</h1>
        {this.state.users.map((user, idx) => (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <td>{idx}</td>
              <td>{user}</td>
            </tbody>
          </table>
        ))}
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//     listUsers:
// });

export default UsersList;

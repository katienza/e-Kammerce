import React, { PureComponent } from 'react';
import axios from 'axios';

class UsersList extends PureComponent {
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
              <tr>
                <td>{idx}</td>
                <td>{user}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    );
  }
}

export default UsersList;

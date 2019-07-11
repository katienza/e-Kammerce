import React, { PureComponent } from 'react';
import axios from 'axios';
import UsersListRow from './UsersListRow';

class UsersList extends PureComponent {
  constructor() {
    super();
    this.state = {
      users: [],
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  async componentWillMount() {
    const { data } = await axios.get('http://localhost:3000/api/usersList');
    const userData = data.map(user => user.body);
    this.setState(state =>
      Object.assign({}, state, {
        users: userData,
      }),
    );
  }

  onClickHandler() {
    this.props.history.push('/products');
  }

  render() {
    return (
      <div className='scrollingTable'>
        <button
          className='navbar-btn'
          onClick={() => this.onClickHandler()}
          style={{position: 'relative', left: '4em'}}>
          Go Back to the main page
        </button>
        <h1>LIST OF USERS:</h1>
        {this.state.users.map((user, idx) => (
          <UsersListRow key={idx} user={user} />
        ))}
      </div>
    );
  }
}

export default UsersList;

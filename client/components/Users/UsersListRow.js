import React from 'react';

const UsersListRow = props => {
  const {user} = props
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{user}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersListRow;

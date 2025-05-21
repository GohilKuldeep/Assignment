import React from "react";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
];

const UserList = () => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => {
          return (
            <div key={user.id}>
              {user.id} -- {user.name}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;

import React, { useState, useEffect } from "react";

const UserDataApi = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  });
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => {
        return (
          <div>
            <h5>Name: {user.name} -- Email: {user.email}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default UserDataApi;

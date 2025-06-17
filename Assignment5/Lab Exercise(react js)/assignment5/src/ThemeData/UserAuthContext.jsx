import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const UserAuthContext = () => {
  const [user, setUser] = useState(null);

  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div>
        <h1>React Context Authentication</h1>
        <AuthStatus />
      </div>
    </AuthContext.Provider>
  );

  function AuthStatus() {
    const { user, login, logout } = useContext(AuthContext);
    const [inputName, setInputName] = useState("");
    if (user) {
      return (
        <div>
          <h2>Welcome, {user.name}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      );
    }

    return (
      <div>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button onClick={() => login(inputName)}>Login</button>
      </div>
    );
  }
};

export default UserAuthContext;

import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Auth = () => {
  const [name, setName] = useState("");
  const { user, isAuthenticated, login, logout } = useAuth();

  return (
    <div className="card">
      <h2>🔐 Auth</h2>

      {isAuthenticated ? (
        <>
          <p className="welcome">Welcome, <strong>{user.name}</strong></p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <input
            placeholder="Enter username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => login(name)} disabled={!name}>
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default Auth;

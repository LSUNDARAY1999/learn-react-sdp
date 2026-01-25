import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { user, login, logout } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const success = login(username, password);
    if (!success) setError("Invalid credentials");
  };

  return (
    <div>
      {user ? (
        <>
          <h3>Welcome, {user.name}</h3>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          {error && <p>{error}</p>}
        </>
      )}
    </div>
  );
};

export default Login;

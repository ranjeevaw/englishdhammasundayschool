import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      username === "admin" &&
      password === "iruehquh9817987"
    ) {
      sessionStorage.setItem("adminLoggedIn", "true");
      navigate("/students");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>ED SS</h1>

        <h2>Administrator Login</h2>

        <form onSubmit={handleLogin}>

          <label>Username</label>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="error">{error}</p>
          )}

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminLogin;

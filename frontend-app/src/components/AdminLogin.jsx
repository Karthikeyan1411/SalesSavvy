import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles.css";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null);

    if (!username.trim() || !password.trim()) {
      setError("Username and password are required");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:9090/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      if (data.role === "ADMIN") {
        navigate("/admindashboard");
      } else {
        setError("Unauthorized: You are not an admin.");
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Admin Login</h1>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSignIn} className="login-form">

          <label className="label">Username</label>
          <input
            type="text"
            className="input"
            value={username}
            placeholder="Enter admin username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            value={password}
            placeholder="Enter admin password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Signing in..." : "Enter as Admin"}
          </button>
        </form>

        <p className="switch-login">
          Not an admin?{" "}
          <a href="/" className="link">Login as User</a>
        </p>
      </div>
    </div>
  );
}

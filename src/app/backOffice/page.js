"use client";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./backend.module.css";
import Backend from "./BackOffice";

export default function BackendLanding() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/validatePassword", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const data = await response.json();

    setLoading(false);

    if (data.success) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError(data.message || "Authentication failed");
    }
  };

  if (isAuthenticated) {
    return <Backend />;
  }

  return (
    <main role="main" className={styles.background}>
      <div className={styles.passwordContainer}>
        <form onSubmit={handleSubmit} className={styles.formStyle}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.passwordInput}
            disabled={loading}
          />
          <button
            type="submit"
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Unlock"}
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </main>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.email === email.toLowerCase() && u.password === password);

    if (!user) {
      setError("Wrong email or password");
      return;
    }

    localStorage.setItem("currentUser", user.name);
    navigate("/");
  }

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Log in</h2>
        {error && <p className="auth-error">{error}</p>}

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Log in</button>
        <p className="auth-switch">
          New to Reddit? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
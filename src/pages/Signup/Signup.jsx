import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Auth.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (Number(age) < 13) {
      setError("You must be at least 13 years old");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === email.toLowerCase())) {
      setError("This email is already used");
      return;
    }

    users.push({ name, email: email.toLowerCase(), phone, age, password });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", name);
    navigate("/");
  }

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        {error && <p className="auth-error">{error}</p>}

        <input placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="tel" pattern="[0-9+]{8,15}" title="Numbers only (8 to 15 digits)" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Sign up</button>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
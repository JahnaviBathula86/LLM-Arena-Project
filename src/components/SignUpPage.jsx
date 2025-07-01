import React, { useState } from "react";
import "./SignUpPage.css";

const SignUpPage = ({ onSignUp, onSwitchToSignIn }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Please fill all fields.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    onSignUp?.(form);
  };

  return (
    <div className="signup-page">
      <div className="background-gradient"></div>
      <div className="signup-card">
        <div className="signup-logo">
          LLM<span>Arena</span>
        </div>
        <h2>Create your account</h2>
        <p className="subtitle">Sign up to get started</p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            autoComplete="username"
            required
          />
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                // Eye Closed SVG
               <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z" fill="#aaa"/>
                </svg>
              ) : (
                // Eye Open SVG
               <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path d="M1 1l22 22M17.94 17.94A9.77 9.77 0 0112 19c-7 0-10-7-10-7a19.05 19.05 0 014.11-5.91M9.53 9.53A3 3 0 0112 9a3 3 0 013 3c0 .47-.12.91-.33 1.29M4.22 4.22A9.77 9.77 0 0112 5c7 0 10 7 10 7a19.05 19.05 0 01-4.11 5.91" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
          <div className="password-wrapper">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
              required
            />
            <button
  type="button"
  className="toggle-password"
  onClick={() => setShowConfirm((v) => !v)}
  tabIndex={-1}
  aria-label={showConfirm ? "Hide password" : "Show password"}
>
  {showConfirm ? (
    // Eye Open SVG (Show password)
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z" fill="#aaa"/>
    </svg>
  ) : (
    // Eye Closed SVG (Hide password)
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <path d="M1 1l22 22M17.94 17.94A9.77 9.77 0 0112 19c-7 0-10-7-10-7a19.05 19.05 0 014.11-5.91M9.53 9.53A3 3 0 0112 9a3 3 0 013 3c0 .47-.12.91-.33 1.29M4.22 4.22A9.77 9.77 0 0112 5c7 0 10 7 10 7a19.05 19.05 0 01-4.11 5.91" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )}
</button>
          </div>
          {error && <div className="form-error">{error}</div>}
          <button type="submit" className="primary-btn">
            Sign Up
          </button>
        </form>
        <div className="signup-footer">
          <span>Already have an account?</span>
          <button className="link-btn" onClick={onSwitchToSignIn}>
            Sign In
          </button>
        </div>
        {/* Optional: Social sign up */}
        <div className="social-signup">
          <button className="google-btn">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
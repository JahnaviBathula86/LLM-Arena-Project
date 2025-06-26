import React, { useState } from "react";
import "./SignInPage.css";

const SignInPage = ({ onSignIn, onSwitchToSignUp }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    onSignIn?.(form);
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <div className="signin-logo">LLM<span>Arena</span></div>
        <h2>Welcome Back</h2>
        <p className="subtitle">Sign in to your account</p>
        <form className="signin-form" onSubmit={handleSubmit}>
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
              autoComplete="current-password"
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
          {error && <div className="form-error">{error}</div>}
          <button type="submit" className="primary-btn">
            Sign In
          </button>
        </form>
        <div className="signin-footer">
          <span>Don&apos;t have an account?</span>
          <button className="link-btn" onClick={onSwitchToSignUp}>
            Sign Up
          </button>
        </div>
        {/* Optional: Social sign-in */}
        <div className="social-signin">
          <button className="google-btn">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
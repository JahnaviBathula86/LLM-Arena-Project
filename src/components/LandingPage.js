import React from "react";
import "./LandingPage.css";
const LandingPage = ({ onSignUp, onSignIn }) => (
  <div className="llmarena-root">
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/logo.png" alt="LLMArena Logo" className="navbar-logo" />
        <span className="navbar-title">LLMArena</span>
      </div>
      <div className="navbar-links">
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <button className="signup-btn" onClick={onSignUp}>Sign Up</button>
        <button className="signin-btn" onClick={onSignIn}>Sign In</button>
      </div>
    </nav>

    <header className="hero">
      <h1>
        Welcome to <span className="highlight">LLMArena</span>
      </h1>
      <p className="subtitle">
        The ultimate platform to explore, compare, and interact with Large Language Models.<br />
        Fast, interactive, and always up-to-date.
      </p>
      <a href="#features" className="cta-btn">Get Started</a>
    </header>
    <main>
      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>Compare Models</h3>
            <p>Benchmark and explore various LLMs side by side in real-time.</p>
          </div>
          <div className="feature">
            <h3>Interactive Playground</h3>
            <p>Test prompts, visualize outputs, and iterate instantly in a unified interface.</p>
          </div>
          <div className="feature">
            <h3>Community Insights</h3>
            <p>Share your findings, vote on models, and collaborate with AI enthusiasts worldwide.</p>
          </div>
           <div className="feature">
    <h3>Notebooks</h3>
    <p>Write your own notes from LLM responses and store them in your user profile.</p>
  </div>
  <div className="feature">
    <h3>Export as PDF</h3>
    <p>Download LLM responses directly as PDF for offline use and sharing.</p>
  </div>
  <div className="feature">
    <h3>Share Button</h3>
    <p>Share LLM responses instantly with others via a direct link.</p>
  </div>
        </div>
      </section>
      <section id="about" className="about">
        <h2>About LLMArena</h2>
        <p>
          LLMArena is designed for developers, researchers, and anyone curious about the latest in language models.
          Our mission is to make AI more accessible, transparent, and collaborative.
        </p>
      </section>
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Questions? Feedback? <a href="mailto:info@llmarena.com">Email us</a> anytime.</p>
      </section>
    </main>
    <footer>
      <p>&copy; 2025 LLMArena. All rights reserved.</p>
    </footer>
  </div>
);

export default LandingPage;
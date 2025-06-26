import React from "react";
import "./LandingPage.css";
import ContactSection from "./ContactSection";
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
        <a href="#reviews">Reviews</a>
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
         LLMArena is a modern platform built for developers, researchers, and AI enthusiasts 
         who want to explore, compare, and get hands-on with the latest large language models. 
         Whether you’re benchmarking models, experimenting with prompts, or discovering new insights, 
         LLMArena makes advanced AI accessible, transparent, and collaborative. Join a growing community 
         and unlock the full potential of language models with powerful tools and intuitive features.
        </p>
      </section>
      <section id="reviews" className="reviews-section">
  <h2 className="reviews-title">What Our Users Say</h2>
  <div className="reviews-bubbles">
    <div className="review-bubble">
      <div className="review-avatar" style={{ background: "linear-gradient(135deg, var(--accent2), var(--accent))" }}>
        <span>🌟</span>
      </div>
      <div className="bubble-content">
        <p>
          “LLMArena’s interface is so intuitive! Comparing model responses has never been easier.”
        </p>
        <span className="review-author">— Priya M.</span>
      </div>
    </div>
    <div className="review-bubble">
      <div className="review-avatar" style={{ background: "linear-gradient(135deg, #ff7eb3, #fa5a7d)" }}>
        <span>👩‍💻</span>
      </div>
      <div className="bubble-content">
        <p>
          “The notebook and export features save me hours every week. Highly recommended for researchers.”
        </p>
        <span className="review-author">— Alex F.</span>
      </div>
    </div>
    <div className="review-bubble">
      <div className="review-avatar" style={{ background: "linear-gradient(135deg, var(--accent), #ff5fa2)" }}>
        <span>🚀</span>
      </div>
      <div className="bubble-content">
        <p>
          “Love the vibrant community and instant sharing. LLMArena is my go-to for LLM experiments!”
        </p>
        <span className="review-author">— Dr. S. Kumar</span>
      </div>
    </div>
  </div>
</section> 
      
<ContactSection />

      
    </main>
    <footer>
      <p>&copy; 2025 LLMArena. All rights reserved.</p>
    </footer>
  </div>
);

export default LandingPage;
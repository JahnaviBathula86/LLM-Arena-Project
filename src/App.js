import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">YourWebsiteName</div>
      <ul className="navbar__links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar__actions">
        <Link to="/signup"><button className="btn signup">Sign Up</button></Link>
        <Link to="/signin"><button className="btn signin">Sign In</button></Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <main className="landing">
      <h1>Welcome to YourWebsiteName</h1>
      <p>The best place for your awesome experience. Start by signing up or signing in!</p>
    </main>
  );
}

function SignIn() {
  return (
    <main className="form-page">
      <h1>Sign In</h1>
      <form className="auth-form">
        <input type="email" placeholder="Email" required /><br/>
        <input type="password" placeholder="Password" required /><br/>
        <button type="submit" className="btn signin">Sign In</button>
      </form>
    </main>
  );
}

function SignUp() {
  return (
    <main className="form-page">
      <h1>Sign Up</h1>
      <form className="auth-form">
        <input type="text" placeholder="Name" required /><br/>
        <input type="email" placeholder="Email" required /><br/>
        <input type="password" placeholder="Password" required /><br/>
        <button type="submit" className="btn signup">Sign Up</button>
      </form>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
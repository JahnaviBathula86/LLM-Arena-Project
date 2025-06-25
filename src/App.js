import React from "react";
import LandingPage from "./components/LandingPage";

function App() {
  // Replace the functions below with your actual sign up/in logic
  const handleSignUp = () => alert("Sign Up clicked!");
  const handleSignIn = () => alert("Sign In clicked!");

  return (
    <LandingPage onSignUp={handleSignUp} onSignIn={handleSignIn} />
  );
}

export default App;
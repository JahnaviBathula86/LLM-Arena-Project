import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";

function App() {
  // page: "landing", "signin", or "signup"
  const [page, setPage] = useState("landing");

  // Handlers for switching pages
  const handleSignInClick = () => setPage("signin");
  const handleSignUpClick = () => setPage("signup");
  const handleBackToLanding = () => setPage("landing");

  // Form submit handlers (replace with real logic as needed)
  const handleSignInSubmit = (form) => {
    alert(`Sign In: ${form.email} / ${form.password}`);
    // Add authentication logic here
  };

  const handleSignUpSubmit = (form) => {
    alert(`Sign Up: ${form.name} / ${form.email}`);
    // Add registration logic here
  };

  return (
    <>
      {page === "landing" && (
        <LandingPage
          onSignIn={handleSignInClick}
          onSignUp={handleSignUpClick}
        />
      )}
      {page === "signin" && (
        <SignInPage
          onSignIn={handleSignInSubmit}
          onSwitchToSignUp={() => setPage("signup")}
        />
      )}
      {page === "signup" && (
        <SignUpPage
          onSignUp={handleSignUpSubmit}
          onSwitchToSignIn={() => setPage("signin")}
        />
      )}
    </>
  );
}

export default App;
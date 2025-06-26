import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import SignInPage from "./components/SignInPage"; // <-- import the Sign In page

function App() {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignUp = () => alert("Sign Up clicked!");
  const handleSignIn = () => setShowSignIn(true);
  const handleSwitchToLanding = () => setShowSignIn(false);
  const handleSignInSubmit = (form) => {
    alert(`Sign In: ${form.email} / ${form.password}`);
    // You can set user as logged in here and redirect as needed.
  };

  return (
    <>
      {showSignIn ? (
        <SignInPage
          onSignIn={handleSignInSubmit}
          onSwitchToSignUp={handleSwitchToLanding}
        />
      ) : (
        <LandingPage onSignUp={handleSignUp} onSignIn={handleSignIn} />
      )}
    </>
  );
}

export default App;
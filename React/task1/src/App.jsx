import React, { useState } from "react"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="container">
      {isLoggedIn ? (
      <div>
        <h1>Welcome Back!</h1>
        <button onClick={toggleLogin}>Logout</button>
      </div>
    ) : (
      <div>
        <h1>Please Log In</h1>
        <button onClick={toggleLogin}>Login</button>
      </div>
    )}
    </div>
  );
};

export default App;


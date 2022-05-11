import React from "react";
import Login from "./Login";

var isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {/* {Date(2022, 1, 1, 11).getHours > 12 && <h1>Why are you working?</h1>} */}
      {isLoggedIn === true ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;

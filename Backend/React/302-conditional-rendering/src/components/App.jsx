import React from "react";

import Login from "./login.jsx";

let isLoggedIn = false;

function Check(){
  return (isLoggedIn) ? <h1>Hello</h1> : <Login /> ;
}

function App() {
  return (
    <div className="container">
      <Check />
    </div>
  );
}

export default App;

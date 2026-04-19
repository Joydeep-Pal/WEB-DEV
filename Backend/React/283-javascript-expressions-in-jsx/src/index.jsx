import React from "react";
import ReactDOM from "react-dom/client";

const name = "Jempie";
const age = 20;
ReactDOM.createRoot(document.getElementById("root")).render(<div>
    <h1>Hemlo {name}</h1>
    <p>Age {age}</p>
</div>);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

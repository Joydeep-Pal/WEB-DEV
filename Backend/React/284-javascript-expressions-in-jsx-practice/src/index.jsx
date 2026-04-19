//Create a react app from scratch.  -done
import React from "react";
import ReactDOM from "react-dom/client";

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
const YOURNAME = "Jempie";
//Copyright CURRENTYEAR.
ReactDOM.createRoot(document.getElementById("root")).render(<div>
    <p>Created by {YOURNAME}</p>
    <p>Copyright {new Date().getFullYear()}</p>
</div>)

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

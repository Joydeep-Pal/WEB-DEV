//Create a react app from scratch.  - done
import React from "react";
import ReactDOM from "react-dom/client"

//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
ReactDOM.createRoot(document.getElementById("root")).render(<div>
    <h1>Hemlo World</h1>
    <ul>
        <li>HI</li>
        <li>HELLO</li>
        <li>HEMLO</li>
    </ul>
</div>);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

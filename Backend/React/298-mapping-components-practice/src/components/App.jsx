import React from "react";

import Element from "./Element.jsx";
import emojipedia from "../emojipedia.js";

function CreateComponent(emoji){
  return(
    <Element 
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(CreateComponent)}
      </dl>
    </div>
  );
}

export default App;

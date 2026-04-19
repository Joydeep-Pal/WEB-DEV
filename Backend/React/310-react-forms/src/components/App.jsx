import React,{useState} from "react";

function App() {

  const [text,setText] = useState("");
  const [name,setName] = useState("");

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input 
        onChange={(event)=>{
          setText(event.target.value);
        }}
        type="text" 
        placeholder="What's your name?" 
        value={text}
      />
      <button
        onClick={()=>{
          setName(text);
        }}  
      >Submit</button>
    </div>
  );
}

export default App;

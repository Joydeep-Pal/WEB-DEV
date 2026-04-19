import React,{useState} from "react";

function App() {
  const [text,newText] = useState("Hemlo");
  const [mousehover,setMousehover] = useState(false);

  function clicked(){
    newText("Submitted");
  }

  function mouseOver(){
    setMousehover(true);
  }

  function mouseOut(){
    setMousehover(false);
  }

  return (
    <div className="container">
      <h1>{text}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={mousehover?{backgroundColor : "black"}:{backgroundColor : "white"}} onClick={clicked} onMouseOver={mouseOver} onMouseOut={mouseOut}>Submit</button>
    </div>
  );
}

export default App;

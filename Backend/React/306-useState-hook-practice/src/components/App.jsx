import React,{useState} from "react";

function App() {
  const [time,setTime] = useState(new Date().toLocaleTimeString());

  function newTime(){
    setTime(new Date().toLocaleTimeString());
  }

  function autoTime(){
    setInterval(newTime,1000);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={newTime}>Get Time</button>
      <button onClick={autoTime}>Auto Time</button>
    </div>
  );
}

export default App;

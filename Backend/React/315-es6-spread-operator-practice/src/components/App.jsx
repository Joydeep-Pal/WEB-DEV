import React,{useState} from "react";

function App() {
  const [note,addNote] = useState("");
  const [list,addIntoList] = useState([]);

  function change(event){
    const {value,name} = event.target;
    addNote(value);
  }

  function addText(){
    addIntoList((prevItems)=>{
      return [...prevItems,note];
    });
    addNote("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          onChange={change}
          type="text"
          value={note}
        />
        <button
          onClick={addText}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((listItem)=>{
            return <li>{listItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
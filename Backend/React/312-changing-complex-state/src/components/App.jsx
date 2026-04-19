import React,{useState} from "react";

function App() {
  const [fullname,setFullname] = useState({
    fname : "",
    lname : ""
  });

  function changes(event){
    const {value , name} = event.target.value;

    setFullname((prevValue)=>{
      if(name === "fname"){
        return({
          fname : value ,
          lname : prevValue.lname
        });
      }else if(name === "lname"){
        return({
          fname : prevValue.fname ,
          lname : value
        });
      }
    })
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <form>
        <input 
          onChange={changes}
          name="fname" 
          placeholder="First Name" 
          value={fullname.fname}
        />
        <input 
          onChange={changes}
          name="lname" 
          placeholder="Last Name" 
          value={fullname.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

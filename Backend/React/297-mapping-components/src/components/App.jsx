import React from "react";
import Card from "./Card.jsx";
import contacts from "../contacts";

function CreateCard(contact){
  return(
    <Card
      key={contact.id}  // unique
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {contacts.map(CreateCard)}
      
    </div>
  );
}

export default App;

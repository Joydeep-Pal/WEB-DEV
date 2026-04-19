import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img className="photo" src="https://thumbs.dreamstime.com/b/cute-cat-sleeping-street-car-random-58655731.jpg?w=768" alt="photu"></img>
      <img className="photo" src="https://img.freepik.com/free-photo/portrait-beautiful-purebred-pussycat-with-shorthair-orange-collar-neck-sitting-floor-reacting-camera-flash-scared-looking-light-indoor_8353-12551.jpg?semt=ais_hybrid&w=740&q=80" alt="photu"></img>
      <img className="photo" src="https://images.pexels.com/photos/1440967/pexels-photo-1440967.jpeg" alt="photu"></img>
    </div>
  </div>
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

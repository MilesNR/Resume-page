import "./App.css";
import * as React from "react";
import Navbar from "./Component/Navbar";
import Aboutme from "./Component/Aboutme";

function App() {
  return (
    <div className="App">
      <div className="App-bg">
        <div className="App-container">
          <Navbar />
          <Aboutme />
        </div>
      </div>
    </div>
  );
}

export default App;

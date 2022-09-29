import "./App.css";
import * as React from "react";
import Navbar from "./Component/Navbar";
import Aboutme from "./Component/Aboutme";
import Contact from "./Component/Detail";

function App() {
  return (
    <div className="App">
      <div className="App-bg">
        <div className="App-container">
          <Navbar />
          <Aboutme />
          <Contact />
        </div>
      </div>
    </div>
  );
}
export default App;

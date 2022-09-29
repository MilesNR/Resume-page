import "./App.css";
import * as React from "react";
import Navbar from "./Component/Navbar";
import Aboutme from "./Component/Aboutme";
import Experience from "./Component/Experience";

function App() {
  return (
    <div className="App">
      <div className="App-bg">
        <div className="App-container">
          <Navbar />

          <Experience />
        </div>
      </div>
    </div>
  );
}
export default App;

import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App container">
      <div className="pageOpener">
        <h1>Dictionary</h1>
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}

export default App;

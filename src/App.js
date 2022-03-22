import React, { useState } from "react";
import UseEffect from "./components/useEffect";
import Lifecycle from "./components/Lifecycle";
import "./index.css";

function App() {
  const [showLifecycle, setshowLifecycle] = useState(true);
  const [showUseEffect, setshowUseEffect] = useState(true);

  return (
    <div className="container">
      <h1 className="first-h1">Lifecycle vs useEffcet</h1>
      <hr></hr>
      <div className="buttons">
        <button
          className="buttons"
          onClick={() => setshowLifecycle(!showLifecycle)}
        >
          Lifecycle X
        </button>
        <button
          className="buttons"
          onClick={() => setshowUseEffect(!showUseEffect)}
        >
          UseEffect X
        </button>
      </div>
      <div className="comp">
        {showLifecycle ? <Lifecycle></Lifecycle> : <div></div>}

        {showUseEffect ? <UseEffect></UseEffect> : <div></div>}
      </div>
      <span>for result:</span>
      <p>Inspect-Console</p>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="useeffect">
      <h3>UseEffect</h3>
      <hr></hr>
      <p>Counter: {counter}</p>
      <button onClick={()=>increase()}>Increase</button>
    </div>
  );
};

export default UseEffect;

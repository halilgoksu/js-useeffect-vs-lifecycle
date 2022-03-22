import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log("useEffect wokrked");
  }, [counter]);

  //--componentDidMount--
  // useEffect(()=>{console.log("useEffect wokrked")},[])
  //--
  //--componentDidUpdate--
  //useEffect(()=>{console.log("useEffect wokrked")},[counter])
  //--
  //useEffect(()=>{console.log("useEffect wokrked")},[counter,counter2]) when counter and counter2 update useEffect will run
  //--
  //--componentWillUnmount

  useEffect(() => {
    const myTimer = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => clearInterval(myTimer);
  }, []);

  useEffect(() => {
    console.log("useEffect Timer", timer);
  });

  const increase = () => {
    setCounter(counter + 1);
  };
  const increase2 = () => {
    setCounter2(counter2 + 1);
  };

  return (
    <div className="useeffect">
      <h3>UseEffect</h3>
      <hr></hr>
      <p>Counter: {counter}</p>
      <button onClick={() => increase()}>Increase</button>
      <p>------------</p>
      <p>Counter2 : {counter2}</p>
      <button onClick={() => increase2()}>Increase2</button>
    </div>
  );
};

export default UseEffect;

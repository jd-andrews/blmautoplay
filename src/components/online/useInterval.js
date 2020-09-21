import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export default function Counter() {
  const [count, setCount] = useState(1);

  useInterval(() => {
    window.open("https://youtu.be/bCgLa25fDHM");

    setCount(count + 1);
  }, 12000000);

  return <h1>played {count} time(s)</h1>;
}

function useInterval(callback, delay) {
  //useRef to setup a mutable object to track the amount of time played
  const savedCallback = useRef();

  // useEffect to track callback/times played
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // useEffect to set current interval
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);

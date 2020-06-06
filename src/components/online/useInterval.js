import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export default function Counter() {
  const [count, setCount] = useState(1);

  useInterval(() => {
    window.open(
      "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwj47O7nwejpAhVLK80KHZPyAnEQPAgH"
    );

    setCount(count + 1);
  }, 10000);

  return <h1>played {count} time(s)</h1>;
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
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

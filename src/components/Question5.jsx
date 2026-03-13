// Show the usage of useMemo hook
// here we memoized the expensive value
// so that when we change text input, function does
// not re-run again because of re-render, depends on count only now

import React, { useMemo, useState } from "react";

function Question5() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState("");
  let expensiveValue = 0;

  const calcEpensiveValue = useMemo(() => {
    console.log("Calculating...");
    return (expensiveValue = value * 1234567890);
  }, [value]);

  return (
    <div className="p-2 flex flex-col gap-3">
      <div>{"Expensive value : " + calcEpensiveValue}</div>

      <div className="flex gap-2">
        <button
          className="border rounded-md bg-gray-100 px-1"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          Increase count
        </button>
        <p>{": " + value}</p>
      </div>

      <div>
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          className="border rounded px-1"
          placeholder="Enter text"
        ></input>
      </div>
    </div>
  );
}

export default Question5;

//Question: Create a React component with a password input field
//and a toggle button to switch between showing and hiding the
//password using the useState hook.
import React, { useState } from "react";

function Question3() {
  const [buttonStatus, setButtonStatus] = useState(false);

  const toggleButtonStatus = () => {
    setButtonStatus(!buttonStatus);
  };

  return (
    <div>
      <div className="p-4 flex gap-2">
        <input className="border rounded px-1" type={buttonStatus ? "text" : "password"}></input>
        <button className="border-2 rounded-lg bg-gray-200 px-1" onClick={toggleButtonStatus}>
          {buttonStatus ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default Question3;

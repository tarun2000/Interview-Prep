// Pass data from child to parent
// using callback functions

import React, { useState } from "react";

function Question4() {
  const [dataFromChild, setDataFromChild] = useState("");

  const handleSendData = (value) => {
    setDataFromChild(value);
  };

  function ChildComponent({ sendData }) {
    const [childData, setChildData] = useState("");

    const handleChildData = (value) => {
      setChildData(value);
    };

    return (
      <div className="border-2 border-blue-600 p-2">
        <p>Child Component</p>

        <input
          type="text"
          className="border rounded px-1 mr-1"
          onChange={(e) => {
            handleChildData(e.target.value);
          }}
        ></input>
        <button
          className="border rounded px-1 bg-gray-200"
          onClick={() => {
            sendData(childData);
          }}
        >
          Pass Data to Parent component
        </button>
      </div>
    );
  }

  return (
    <div className="border-2 border-red-600 p-2">
      <p>Parent component</p>
      <div>Data from child : {dataFromChild} </div>
      <ChildComponent sendData={handleSendData} />
    </div>
  );
}

export default Question4;

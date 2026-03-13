// // Question: Create a React component that dynamically manages a
// list of input fields, allowing the user to add new fields, update
// values, remove specific fields, and submit all input values
// //   as an array using the useState hook.

import { useState } from "react";

function Question2() {
  const [inputs, setInputs] = useState([""]);

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const addField = () => {
    setInputs([...inputs, ""]);
  };

  const removeField = (index) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };

  const handleSubmit = () => {
    console.log(inputs);
  };

  return (
    <div className="p-2 ">
      {inputs.map((value, index) => (
        <div className="flex gap-2" key={index}>
          <input
            className="border rounded px-1 mb-1"
            type="text"
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
          />

          <button className="bg-gray-200 hover:bg-red-300 border-2 rounded px-1" onClick={() => removeField(index)}>
            Remove
          </button>
        </div>
      ))}

      <button className="bg-gray-200 mr-2 mt-4 border-2 rounded px-1 hover:bg-blue-300" onClick={addField}>
        Add Field
      </button>

      <button className="bg-gray-200 border-2 rounded px-1 hover:bg-green-300" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Question2;

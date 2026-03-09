// Question: Create a multi-tab form in React with the following requirements:

// The form has three tabs: Profile, Interest, and Settings, with navigation between them.
// Each tab contains specific input fields:
// Profile: age and email (with validation).
// Interest: hobby, preference (radio), and notifications (checkbox).
// Settings: theme (dropdown).
// Use useState to manage the current tab, form data, and validation errors.
// Validate fields of the current tab before switching to another tab or submitting the form.
// Display appropriate error messages for validation failures.
// On form submission, log the collected data and show a success message.

import React, { useState } from "react";

function question1() {
  const tabnames = ["Profile", "Interest", "Settings"];

  const [tabIndex, setTabIndex] = useState(0);
  const [formData, setFormData] = useState({
    Profile: { age: "", email: "" },
    Interest: { hobby: "", preference: "", notifications: false },
    Settings: { theme: "light" },
  });
  const [validationError, setValidationError] = useState({});

  const validateFiledData = () => {
    const newError = {};
    if (tabIndex === 0) {
      const { age, email } = formData.Profile;

      if (!age) newError.age = "Age is required";
      else if (!/^\d+$/.test(age)) newError.age = "Age must be a number";

      if (!email) newError.email = "Email is required";
      else if (!/^\S+@\S+\.\S+$/.test(email)) newError.email = "It must be a valid email id";
    } else if (tabIndex === 1) {
      const { hobby } = formData.Interest;

      if (!hobby) newError.hobby = "Please select a hobby";
    }

    setValidationError(newError);
    console.log(newError);

    return Object.keys(newError).length === 0;
  };

  const handleFormData = (tab, field, value) => {
    setFormData((prev) => ({ ...prev, [tab]: { ...prev[tab], [field]: value } }));
  };

  const handleTabChange = (idx) => {
    if (!validateFiledData()) return;
    setValidationError({});
    setTabIndex(idx);
  };

  const handleSubmitForm = () => {
    if (validateFiledData()) {
      console.log("Form submitted succesfully, here's the form data : ", formData);
    }
  };

  return (
    <div className="flex flex-col p-4">
      <div className="gap-2 flex  mb-4">
        {tabnames.map((data, idx) => {
          return (
            <button
              className={
                tabIndex === idx
                  ? "border-cyan-700 border-2 bg-blue-100 rounded-md p-1 font-bold"
                  : "border-1 rounded-md p-1 "
              }
              onClick={() => {
                handleTabChange(idx);
              }}
            >
              {data}
            </button>
          );
        })}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {tabIndex === 0 && (
          <div className="flex flex-col gap-1">
            <div>
              <span>Age : </span>
              <input
                className="border-1 rounded-xl text-black bg-white"
                onChange={(e) => handleFormData(tabnames[tabIndex], "age", e.target.value)}
                type="text"
                value={formData.Profile.age}
              ></input>
              {validationError.age && <p className="text-red-800">{validationError.age}</p>}
            </div>
            <div>
              <span>Email : </span>
              <input
                className="border-1 rounded-xl text-black bg-white"
                onChange={(e) => handleFormData(tabnames[tabIndex], "email", e.target.value)}
                type="text"
                value={formData.Profile.email}
              ></input>
              {validationError.email && <p className="text-red-800">{validationError.email}</p>}
            </div>
          </div>
        )}
        {tabIndex === 1 && (
          <div className="flex flex-col gap-1">
            <div>
              <span>Hobby : </span>
              <select
                className="border-1"
                value={formData.Interest.hobby}
                onChange={(e) => {
                  handleFormData(tabnames[tabIndex], "hobby", e.target.value);
                }}
              >
                <option value="">Select</option>
                <option value="Football">Football</option>
                <option value="Cricket">Cricket</option>
                <option value="Baseball">Baseball</option>
              </select>
              {validationError.hobby && <p className="text-red-800">{validationError.hobby}</p>}
            </div>
            <div>
              <span>Preferences : </span>
              <label className="mx-2">
                <input
                  value="Indoor"
                  className=""
                  onChange={(e) => handleFormData(tabnames[tabIndex], "preference", e.target.value)}
                  type="radio"
                ></input>
                Indoor
              </label>
              <label>
                <input
                  className=""
                  onChange={(e) => handleFormData(tabnames[tabIndex], "preference", e.target.value)}
                  type="radio"
                  value="Outdoor"
                ></input>
                Outdoor
              </label>
            </div>
            <div>
              <span className="mr-2">Notifications</span>
              <input
                onChange={(e) => {
                  handleFormData(tabnames[tabIndex], "notifications", e.target.checked);
                }}
                type="checkbox"
                checked={formData.Interest.notifications}
              ></input>
            </div>
          </div>
        )}
        {tabIndex === 2 && (
          <div className="flex flex-col gap-1">
            <div>
              <span>Theme : </span>
              <select
                className="border-1 "
                onChange={(e) => handleFormData(tabnames[tabIndex], "theme", e.target.value)}
                value={formData.Settings.theme}
              >
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
              </select>
            </div>
          </div>
        )}

        {
          <div className="flex gap-2 mt-4">
            {tabIndex > 0 && (
              <button
                className="border-1 rounded-md p-1"
                type="button"
                onClick={() => {
                  handleTabChange(tabIndex - 1);
                }}
              >
                Prev
              </button>
            )}

            {tabIndex < 2 && (
              <button
                className="border-1 rounded-md p-1"
                type="button"
                onClick={() => {
                  handleTabChange(tabIndex + 1);
                }}
              >
                Next
              </button>
            )}
            {tabIndex === 2 && (
              <button
                className="border-1 rounded-md p-1"
                type="button"
                onClick={() => {
                  handleSubmitForm();
                }}
              >
                Submit
              </button>
            )}
          </div>
        }
      </form>
    </div>
  );
}

export default question1;

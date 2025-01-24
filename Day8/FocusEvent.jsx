import React, { useState } from "react";

const FocusEventComponent = () => {
  const [message, setMessage] = useState("");

  const handleFocus = () => {
    setMessage("Input is focused!");
  };

  const handleBlur = () => {
    setMessage("Input lost focus.");
  };

  return (
    <div>
      <h2>React Focus Event Example</h2>
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Click to focus..."
      />
      <p>{message}</p>
    </div>
  );
};

export default FocusEventComponent;

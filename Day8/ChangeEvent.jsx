import React, { useState } from "react";

const ChangeEventComponent = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Input Value: {text}</p>
    </div>
  );
};

export default ChangeEventComponent;

import React, { useState } from 'react';

const ParentChildComponent = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message: {message}</p>
      <div>
        <h2>Child Component</h2>
        <button onClick={() => handleMessageChange('Hello from the Child component!')}>
          Send Message to Parent
        </button>
      </div>
    </div>
  );
};

export default ParentChildComponent;

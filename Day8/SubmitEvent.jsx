import React, { useState } from 'react';

const SubmitComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default SubmitComponent;
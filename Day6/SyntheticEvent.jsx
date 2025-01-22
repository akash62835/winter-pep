import React from 'react';

const SyntheticEventComponent = () => {
  const handleInputChange = (event) => {
    console.log('Input value:', event.target.value);
  };

  return <input type="text" onChange={handleInputChange} placeholder="Type something" />;
};

export default SyntheticEventComponent;

import React from 'react';

const ClickEventComponent = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
};

export default ClickEventComponent;

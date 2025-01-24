import React from 'react';

const ClickComponent = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me!</button>;
};
export default ClickComponent;
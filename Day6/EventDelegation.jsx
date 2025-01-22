import React from 'react';

const EventDelegationComponent = () => {
  const handleClick = (event) => {
    if (event.target.tagName === 'LI') {
      console.log('Item clicked:', event.target.textContent);
    }
  };

  return (
    <ul onClick={handleClick}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
};

export default EventDelegationComponent;

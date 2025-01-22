import React from 'react';

const KeyboardEventComponent = () => {
  const handleKeyPress = (event) => {
    console.log('Key pressed:', event.key);
  };

  return <input type="text" onKeyPress={handleKeyPress} placeholder="Press a key" />;
};

export default KeyboardEventComponent;

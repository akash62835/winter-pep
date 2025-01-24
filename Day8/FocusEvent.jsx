import React, { useState } from 'react';

const FocusComponent = () => {
  const [focused, setFocused] = useState(false);

  return (
    <input
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{ border: focused ? '2px solid blue' : '1px solid gray' }}
    />
  );
};
export default FocusComponent;
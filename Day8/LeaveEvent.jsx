import React, { useState } from 'react';

const MouseEventComponent = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ padding: '20px', backgroundColor: hovered ? 'lightblue' : 'lightgray' }}
    >
      {hovered ? 'Mouse is here!' : 'Hover over me!'}
    </div>
  );
};
export default MouseEventComponent;
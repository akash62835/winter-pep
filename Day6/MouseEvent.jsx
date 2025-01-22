import React, { useState } from 'react';

const MouseEventComponent = () => {
  const [bgColor, setBgColor] = useState('white');

  const handleMouseEnter = () => setBgColor('lightblue');
  const handleMouseLeave = () => setBgColor('white');

  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: '200px',
        height: '100px',
        textAlign: 'center',
        lineHeight: '100px',
        border: '1px solid #ccc',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover Over Me
    </div>
  );
};

export default MouseEventComponent;

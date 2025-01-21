import React from 'react';

// Child Component
const Child = ({ name }) => {
  return (
    <div>
      <p>Child Component: {name}</p>
    </div>
  );
};

// Parent Component
const Parent = ({ children }) => {
  return (
    <div>
      <h1>Parent Component</h1>
      {children}
    </div>
  );
};

// Grandparent Component
const Grandparent = () => {
  return (
    <div>
      <h1>Grandparent Component</h1>
      <Parent>
        <Child name="Nested Child" />
      </Parent>
    </div>
  );
};

export default Grandparent;

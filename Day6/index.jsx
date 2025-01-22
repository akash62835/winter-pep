import React from 'react';
import './App.css';
import ClickEventComponent from "./Day6/ClickEvent";
import FormSubmissionComponent from "./Day6/SumbessionHandling";
import ClassComponentEventBinding from "./Day6/EventBinding";
import SyntheticEventComponent from "./Day6/SyntheticEvent";
import EventDelegationComponent from "./Day6/EventDelegation";
import MouseEventComponent from "./Day6/MouseEvent";
import KeyboardEventComponent from "./Day6/KeyboardEvent";
const App = () => {
    return (
      <div>
        <h1>React Event Handling Examples</h1>
  
        <section>
          <h2>1. Handling Click Events</h2>
          <ClickEventComponent />
        </section>
  
        <section>
          <h2>2. Form Submission Handling</h2>
          <FormSubmissionComponent />
        </section>
  
        <section>
          <h2>3. Event Binding in Class Components</h2>
          <ClassComponentEventBinding />
        </section>
  
        <section>
          <h2>4. Synthetic Events</h2>
          <SyntheticEventComponent />
        </section>
  
        <section>
          <h2>5. Event Delegation</h2>
          <EventDelegationComponent />
        </section>
  
        <section>
          <h2>6. Mouse Events</h2>
          <MouseEventComponent />
        </section>
  
        <section>
          <h2>7. Keyboard Events</h2>
          <KeyboardEventComponent />
        </section>
      </div>
    );
  };
  
  export default App;
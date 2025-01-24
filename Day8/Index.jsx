import React from "react";
import ClickComponent from "./Day8/ClickEvent";
import  ChangeComponent from "./Day8/ChangeEvent";
import SubmitComponent from "./Day8/SubmitEvent";
import MouseEventComponent from "./Day8/LeaveEvent";
import FocusComponent from "./Day8/FocusEvent";

const App = () => {
    return (
        <div>
            <div className="component-container">
                <h2>Click Event</h2>
                <ClickComponent />
            </div>
            <div className="component-container">
                <h2>Change Event</h2>
                <ChangeComponent />
            </div>
            <div className="component-container">
                <h2>Submit Event</h2>
                <SubmitComponent />
            </div>
            <div className="component-container">
                <h2>Mouse Enter/Leave Events</h2>
                <MouseEventComponent />
            </div>
            <div className="component-container">
                <h2>Focus Event</h2>
                <FocusComponent />
            </div>
        </div>
    );
};


export default App;
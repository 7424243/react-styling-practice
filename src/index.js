//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const style = {
  color: "black"
};

const now = new Date();
const time = now.getHours();
const displayTime = () => {
  if (time < 12) {
    style.color = "red";
    return "Good Morning!";
  } else if (time < 18) {
    style.color = "green";
    return "Good Afternoon!";
  } else {
    style.color = "blue";
    return "Good Evening!";
  }
};

ReactDOM.render(
  <h1 className="heading" style={style}>
    {displayTime()}
  </h1>,
  document.getElementById("root")
);

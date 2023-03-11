import React from "react";
import "./Example.css";

function Example(props) {
  if (props.example) {
    return (
      <div className="Example row mt-1">
        <h5 className="header col-3">Example</h5>
        <p className="col-9">"{props.example}"</p>
      </div>
    );
  } else {
    return null;
  }
}

export default Example;

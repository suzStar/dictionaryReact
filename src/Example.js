import React from "react";
import "./Example.css";

function Example(props) {
  if (props.example) {
    return (
      <div className="Example row mt-1">
        <h5 className="header col-4 col-sm-4 col-md-3">Example</h5>
        <p className="col-8 col-sm-8 col-md-9">"{props.example}"</p>
      </div>
    );
  } else {
    return null;
  }
}

export default Example;

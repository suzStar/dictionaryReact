import React from "react";
import "./SpeechMeaning.css";

function SpeechMeaning(props) {
  if (props.definitions) {
    return (
      <div className="SpeechMeaning row mt-1">
        <h5 className="header col-4 col-sm-4 col-md-3">
          {props.definitions.partOfSpeech}
        </h5>
        <p className="col-8 col-sm-8 col-md-9">{props.definitions.definition}</p>
      </div>
    );
  } else {
    return null;
  }
}

export default SpeechMeaning;

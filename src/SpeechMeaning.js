import React from "react";
import "./SpeechMeaning.css";

function SpeechMeaning(props) {
  if (props.definitions) {
    return (
      <div className="SpeechMeaning row mt-1">
        <h5 className="header col-3">{props.definitions.partOfSpeech}</h5>
        <p className="col-9">{props.definitions.definition}</p>
      </div>
    );
  } else {
    return null;
  }
}

export default SpeechMeaning;

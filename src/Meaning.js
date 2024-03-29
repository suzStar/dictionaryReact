import React from "react";
import SpeechMeaning from "./SpeechMeaning";
import Synonyms from "./Synonyms";
import Example from "./Example";

function Meanings(props) {
  return (
    <div className="Meanings row gx-1">
      <div className="row justify-content-start">
        <SpeechMeaning definitions={props.meaningData} />
        <Example example={props.meaningData.example} />
        <Synonyms synonyms={props.meaningData.synonyms} />{" "}
      </div>
      <hr />
    </div>
  );
}

export default Meanings;

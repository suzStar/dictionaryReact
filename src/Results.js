import React from "react";
import "./Results.css";
import WordPhonetic from "./WordPhonetic";
import Meaning from "./Meaning";
import Images from "./Images";

function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <WordPhonetic WordPhoneticData={props.data} />
        <Meaning meaningData={props.data} />
        {/* {props.data.meanings.map(function (definition, index) {
          return (
            <div key={index}>
              <Meaning meaningData={definition} />
            </div>
          );
        })} */}
        <Images />
      </div>
    );
  } else {
    return null;
  }
}

export default Results;

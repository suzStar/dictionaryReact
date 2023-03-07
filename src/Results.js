import React from "react";
import WordPhonetic from "./WordPhonetic";
import Meaning from "./Meaning";
import Images from "./Images";

function Results(props) {
  console.log("test");
  if (props.data) {
    return (
      <div className="Results">
        <WordPhonetic WordPhoneticData={props.data} />
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaningData={meaning} />
            </div>
          );
        })}
        <Images />
      </div>
    );
  } else {
    return null;
  }
}

export default Results;

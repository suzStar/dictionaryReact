import React from "react";
import "./Results.css";
import WordPhonetic from "./WordPhonetic";
import Meaning from "./Meaning";


function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <WordPhonetic WordPhoneticData={props.data} />
        <div className="scroll">
          {props.data.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaningData={meaning} />
              </section>
            );
          })}
          
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Results;

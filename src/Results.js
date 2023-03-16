import React from "react";
import "./Results.css";
import WordPhonetic from "./WordPhonetic";
import Meaning from "./Meaning";
import Photos from "./Photos";

function Results(props) {
  return (
    <div className="Results">
      <WordPhonetic WordPhoneticData={props.data} />
      <div className="scroll row">
        <div className="col-12 col-sm-12 col-md-8">
          {props.data.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaningData={meaning} photos={props.photoData} />
              </section>
            );
          })}
        </div>
        <section className="col-12 col-sm-12 col-md-4">
          <Photos photos={props.photoData} />
        </section>
      </div>
    </div>
  );
}

export default Results;

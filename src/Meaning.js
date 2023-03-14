import React from "react";
import SpeechMeaning from "./SpeechMeaning";
import Synonyms from "./Synonyms";
import Example from "./Example";
import Images from "./Images";
import "./Images.css";

function Meanings(props) {
  return (
    <div className="Meanings row gx-1">
      <div className=" col-8">
        <div className="row justify-content-start">
          <SpeechMeaning definitions={props.meaningData} />
          <Example example={props.meaningData.example} />
          <Synonyms synonyms={props.meaningData.synonyms} />{" "}
        </div>
        <hr />
      </div>
      <div className="col-4 img-scroll">
        <Images photos={props.photos} />
      </div>
    </div>
  );
}

export default Meanings;

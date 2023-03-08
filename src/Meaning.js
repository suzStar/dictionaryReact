import React from "react";

function Meanings(props) {
  console.log(props.meaningData);
  return (
    <div className="Meanings row gx-1">
      <div className=" col-9">
        <div className="row">
          <h5 className="headers col-3 mb-auto">
            {props.meaningData.meanings[0].partOfSpeech}
          </h5>
          <p className="col-9 mb-auto">
            {props.meaningData.meanings[0].definition}
          </p>
          <h5 className="subheader mt-3 col-3 align-self-start">Synonyms</h5>
          <p className="mt-3 col-9 align-self-start">
            {props.meaningData.meanings[0].synonyms}
          </p>{" "}
        </div>
      </div>
      <div className=" col-3 ">
        <h5 className="headers col-3 mb-auto">Phrases</h5>
        <p className="col-9">{props.meaningData.meanings[0].example}</p>
      </div>
    </div>
  );
}

export default Meanings;
{
  /* {props.meaningData.map(function (definition, index) {
        return (
          <div>
            <p>
              {definition}
            </p>
          </div>
        );
      })} */
}

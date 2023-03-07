import React from "react";

function Meanings(props) {
  console.log(props.meaningData);
  return (
    <div className="Meanings">
      <h3>{props.meaningData.partOfSpeech}</h3>

      {props.meaningData.definitions.map(function (definition, index) {
        return (
          <div>
            <p>
              {definition.definition}
              <br />
              {definition.example}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Meanings;

import React from "react";
import "./Synonyms.css";

function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms row mt-1">
        <h5 className="subheader col-4 col-sm-4 col-md-3">Synonyms</h5>

        <ul className="col-8 col-sm-8 col-md-9">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default Synonyms;

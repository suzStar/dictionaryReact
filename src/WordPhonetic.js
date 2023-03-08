import React from "react";

function WordPhonetic(props) {
  return (
    <div className="row align-middle mt-3 mb-3">
      <h2 className="wordSearched col-8">{props.WordPhoneticData.word}</h2>
      <h2 className="phonetic col-4">{props.WordPhoneticData.phonetic}</h2>
    </div>
  );
}

export default WordPhonetic;

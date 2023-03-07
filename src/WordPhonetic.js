import React from "react";

function WordPhonetic(props) {
  return (
    <div>
      <h2>{props.WordPhoneticData.word}</h2>
      {/* <h2>
        {props.WordPhoneticData.phonetics.map(function (phonetic, index) {
          return phonetic.phonetics[0].text;
        })}
      </h2> */}
    </div>
  );
}

export default WordPhonetic;

import React, { useState } from "react";
import axios from "axios";

function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleKeywordInput(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <div className="input-group mb-3">
          <input
            type="search"
            className="form-control"
            onChange={handleKeywordInput}
            placeholder="What word do you want to look up?"
            aria-label="What word do you want to look up?"
          />
          <div className="input-group-">
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Dictionary;

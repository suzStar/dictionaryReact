import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [definition, setDefinition] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiKey = "d04fb3e0250t4fa0be3579oeba197b2c";
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleResponse(response) {
    setDefinition(response.data);
  }

  function handleKeywordInput(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search} className="d-flex">
        <input
          className="form-control mr-5"
          type="search"
          onChange={handleKeywordInput}
          placeholder="What word do you want to look up?"
          aria-label="What word do you want to look up?"
        />{" "}
        <button className="btn btn-primary w-25" type="submit">
          Search
        </button>{" "}
      </form>
      <Results data={definition} />
    </div>
  );
}

export default Dictionary;

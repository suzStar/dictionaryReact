import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setDefinition(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data);
  }

  function search() {
    if (keyword) {
      const apiKey = "d04fb3e0250t4fa0be3579oeba197b2c";
      let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
      axios.get(apiURL).then(handleDictionaryResponse);

      const pixelsApiKey =
        "3dO4pitIK1qBFTRXFFOcKjgKu1HrkhMb5FbT8n7OwbsRXNOL4zUFJbWg";
      let pixelsApiURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
      let headers = { Authorization: ` ${pixelsApiKey}` };
      axios.get(pixelsApiURL, { headers: headers }).then(handlePexelsResponse);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordInput(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit} className="d-flex">
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
        <Results data={definition} photoData={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

export default Dictionary;

import React, {useEffect, useContext, useState} from 'react';
import './suggestionList.css';
import {inputContext} from "../../context/inputContext";


const SuggestionList = ({posts}) => {
  const suggestionsLength = 5;
  const [suggestions, setSuggestions] = useState([]);
  const {setSearchInput, searchInput, focused} = useContext(inputContext);

  useEffect(() => {
    let suggestions = [];

    for (let i = 0; i < suggestionsLength && i < posts.length; i++) {
      const startIndex = posts[i].title.indexOf(searchInput)
      if (startIndex >= 0 && searchInput) {
        let candidate = posts[i].title.slice(startIndex);
        suggestions.push(candidate);
      }
    }

    setSuggestions(suggestions)
  }, [searchInput])

  function suggest(e) {
    setSearchInput(e);
  }

  return (
    <div className="suggestion-container">
      {focused
        ? suggestions.map(e => <button className="suggestion" onClick={() => suggest(e)}>{e}</button>)
        : <></>
      }
    </div>
  );
};

export default SuggestionList;
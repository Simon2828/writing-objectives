import Fuse from 'fuse.js';
import React, { useState, useRef, useContext, useEffect } from 'react';
import { LearningObjectivesContext } from './LearningObjectivesContext';
import SearchResults from './SearchResults';


const Search = () => {
  const [state, setState] = useContext(LearningObjectivesContext);

  function updateTextBox(e) {
    setState({...state, searchText: e.target.value})
  }

  const learningObjectiveTitles = state.learningObjectives.allIds.map(id => (
    state.learningObjectives.byId[id].title
    ));

  const index = Fuse.createIndex(
    state.learningObjectives.allIds,
    learningObjectiveTitles
   )

  let options = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    minMatchCharLength: 1,
    keys: [
      "state.learningObjectives.allIds",
    ]
  };

  let fuse = new Fuse(learningObjectiveTitles, options, index);
  let result = fuse.search(state.searchText);

  console.log({result})


  const inputText = useRef(null);

    useEffect(() => {
      inputText.current.focus();
    }, []);

  return (
    <>
    <input
      ref={inputText}
      onChange={updateTextBox}
      placeholder="Search for Learning Objective..."
    />

    <SearchResults result={result} />
    </>
  )
}

export default Search;
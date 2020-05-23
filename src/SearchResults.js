import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {LearningObjectivesContext} from './LearningObjectivesContext'

const SearchResults = ({ result}) => {

  const [state] = useContext(LearningObjectivesContext);

  const objectives = result.map((title, i) => <li key={i}><Link to={{pathname: "/learning-objective", state: {objective: title, result: result}}} >{title.item}</Link></li>)


  return (
    <ul>
      {objectives}
    </ul>
  )
}

export default SearchResults;
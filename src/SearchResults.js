import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledSearchResults = styled.ul`
  margin: 1rem;
  font-size: 1.5rem;
`

const StyledLink = styled.li`
  margin: 1rem;
  > a {
    text-decoration: none;
  }
`

const SearchResults = ({ result }) => {

  const objectives = result.map((title, i) => <StyledLink key={i}>
    <Link to={{pathname: "/learning-objective", state: {objective: title, result: result}}} >{title.item}</Link>
    </StyledLink>)


  return (
    <StyledSearchResults>
      {objectives}
    </StyledSearchResults>
  )
}

export default SearchResults;
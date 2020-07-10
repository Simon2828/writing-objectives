import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const StyledHeading = styled.h3`
  padding-left: 1rem;
  padding-top: 0.5rem;
`

const Navigation = ({className}) => {
  return (
    <>
    <Link to="/">
    <StyledHeading className={className}>Learning Objectives</StyledHeading>
    </Link>
    </>
    )
  }

  const StyledNavigation = styled(Navigation)`
    width: 100vw;
    background-color: #00aeef;
    color: white;
    margin: 0;
    height: 3rem;

  `

export default StyledNavigation;
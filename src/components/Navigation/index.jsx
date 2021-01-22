import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuthenticationButton from "../AuthenticationButton";

const StyledHeading = styled.h3`
  padding-left: 1rem;
  padding-top: 0.5rem;
`;

const FlexWrapper = styled.nav`
  display: flex;
  background-color: #00aeef;
`;

const Navigation = ({ className }) => {
  return (
    <Link to="/">
      <FlexWrapper>
        <StyledHeading className={className}>Learning Objectives</StyledHeading>
        <AuthenticationButton />
      </FlexWrapper>
    </Link>
  );
};

const StyledNavigation = styled(Navigation)`
  width: 100vw;
  background-color: #00aeef;
  color: white;
  margin: 0;
  height: 3rem;
  display: flex;
`;

export default StyledNavigation;

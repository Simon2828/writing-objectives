import React, { useState, useContext } from "react";
import { LearningObjectivesContext } from "../../LearningObjectivesContext";
import styled from 'styled-components';



const StyledCheckbox = styled.input`
  margin-left: auto;
  margin-right: 0;
`

const StepToSuccess = ({ stepToSuccess, id, loId, onClick, achieved, className }) => {

  return (
    <>
        <li className={className}>{stepToSuccess}
        <StyledCheckbox
          type="checkbox"
          checked={achieved}
          onChange={()=>onClick(id)}
          id="horns"
          name="horns"
        /></li>


    </>
  );
};

const StyledStepToSuccess = styled(StepToSuccess)`
display: flex;
font-size: 1.5rem;
margin-bottom: 1rem;
`


export default StyledStepToSuccess;

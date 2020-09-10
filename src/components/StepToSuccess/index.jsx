import React from "react";
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
        />
      </li>
    </>
  );
};

const StyledStepToSuccess = styled(StepToSuccess)`
display: flex;
font-size: 1.2rem;
margin-bottom: 1rem;
padding-bottom: 0.3rem;
border-bottom: dashed 1px #00AEEf
`


export default StyledStepToSuccess;

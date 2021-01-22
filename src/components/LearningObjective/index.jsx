import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StepsToSuccess from "../StepsToSuccess";
import StyledStepToSuccess from "../StepToSuccess";
import { LearningObjectivesContext } from "../../LearningObjectivesContext";
import styled from "styled-components";
import EditLearningObjective from "../EditLearningObjective";

const FlexWrapper = styled.ul`
  display: flex;
  margin: 0.8rem auto 5rem;
  flex-direction: column;
  width: 90%;
  @media only screen and (min-width: 600px) {
    width: 80%;
    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: black;
    }
  }
`;

const StyledLearningObjective = styled.h2`
  border-bottom: rgb(228, 230, 232) 1px solid;
  width: 100%;
`;

const StyledAllDone = styled.div`
  margin: 2rem;
  font-size: 1.5rem;
`;

const StyledButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: white;
  cursor: pointer;
`;

const LearningObjective = (state) => {
console.log("🚀 ~ file: index.jsx ~ line 48 ~ LearningObjective ~ state", state)

  const [learningObjectives, setState] = useContext(LearningObjectivesContext);
  const learningObjective = state.location.state.objective.item;
  const learningObjectiveRefIndex = state.location.state.objective.refIndex;
  // is there a better way to update state of checkbox below?
  const handleCheckClick = (id) => {
    setState((learningObjectives) => ({
      ...learningObjectives,
      stepsToSuccess: {
        ...learningObjectives.stepsToSuccess,
        byId: {
          ...learningObjectives.stepsToSuccess.byId,
          [id]: {
            achieved: !learningObjectives.stepsToSuccess.byId[id].achieved,
            id: id,
            stepToSuccess:
              learningObjectives.stepsToSuccess.byId[id].stepToSuccess,
          },
        },
      },
    }));
  };
  const loId =
    learningObjectives.learningObjectives.allIds[learningObjectiveRefIndex];

  const allStepsToSuccessCompleted = () => {
    return learningObjectives.learningObjectives.byId[
      loId
    ].stepsToSuccess.every((stepId) => {
      return learningObjectives.stepsToSuccess.byId[stepId].achieved;
    });
  };

  const stepsToSuccess = learningObjectives.learningObjectives.byId[
    loId
  ].stepsToSuccess.map((step, i) => {
    return (
      <StyledStepToSuccess
        key={i}
        stepToSuccess={
          learningObjectives.stepsToSuccess.byId[step].stepToSuccess
        }
        id={step}
        loId={loId}
        onClick={handleCheckClick}
        achieved={learningObjectives.stepsToSuccess.byId[step].achieved}
      />
    );
  });

  const stepsToSuccessToEdit = learningObjectives.learningObjectives.byId[
    loId
  ].stepsToSuccess.map((step, i) => {
    return (
        <li key={i}>{learningObjectives.stepsToSuccess.byId[step].stepToSuccess}</li>
        // id={step}
    );
  });

// TODO - edit above to return steps to success to edit

  return (
    <FlexWrapper>
      <Link to={{
        pathname: "/learning-objective/edit",
        learningObjective,
        loId,
        stepsToSuccessToEdit
    }} >
        <StyledButton>Edit</StyledButton>
      </Link>
      <StyledLearningObjective>{learningObjective}</StyledLearningObjective>
      <StepsToSuccess>{stepsToSuccess}</StepsToSuccess>
      {allStepsToSuccessCompleted() && (
        <Link to="/well-done">
          <StyledAllDone>All done?</StyledAllDone>
          <StyledButton>Yes!</StyledButton>
        </Link>
      )}
    </FlexWrapper>
  );
};

export default LearningObjective;

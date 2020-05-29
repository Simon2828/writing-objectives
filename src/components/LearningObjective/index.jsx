import React, { useContext } from "react";
import StepsToSuccess from "../StepsToSuccess";
import StepToSuccess from "../StepToSuccess";
import { LearningObjectivesContext } from "../../LearningObjectivesContext";

const LearningObjective = (state) => {
  const [learningObjectives] = useContext(LearningObjectivesContext);
  const learningObjective = state.location.state.objective.item;
  const learningObjectiveRefIndex = state.location.state.objective.refIndex;
  const loId =
    learningObjectives.learningObjectives.allIds[learningObjectiveRefIndex];

  const stepsToSuccess = learningObjectives.learningObjectives.byId[
    loId
  ].stepsToSuccess.map((step, i) => {
    return (
      <StepToSuccess
        key={i}
        stepToSuccess={
          learningObjectives.stepsToSuccess.byId[step].stepToSuccess
        }
      />
    );
  });

  return (
    <>
      <h4>{learningObjective}</h4>
      <StepsToSuccess>{stepsToSuccess}</StepsToSuccess>
    </>
  );
};

export default LearningObjective;

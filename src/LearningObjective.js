import React, {useContext} from 'react';
import { LearningObjectivesContext } from './LearningObjectivesContext';

const LearningObjective = (state) => {

  const [learningObjectives] = useContext(LearningObjectivesContext);
  const learningObjective = state.location.state.objective.item
  const learningObjectiveRefIndex = state.location.state.objective.refIndex
  const loId = learningObjectives.learningObjectives.allIds[learningObjectiveRefIndex];

  const stepsToSuccess = learningObjectives.learningObjectives.byId[loId].stepsToSuccess.map((step, i) => {
    return <li key={i}>{learningObjectives.stepsToSuccess.byId[step].stepToSuccess}</li>});

  return (
    <>
    <h4>{learningObjective}</h4>
    <ul>{stepsToSuccess}</ul>
    </>
  );
  }

export default LearningObjective;
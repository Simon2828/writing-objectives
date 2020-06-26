import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StepsToSuccess from "../StepsToSuccess";
import StepToSuccess from "../StepToSuccess";
import { LearningObjectivesContext } from "../../LearningObjectivesContext";

const LearningObjective = (state) => {
  const [learningObjectives, setState] = useContext(LearningObjectivesContext);
  const learningObjective = state.location.state.objective.item;
  const learningObjectiveRefIndex = state.location.state.objective.refIndex;
  // console.log('learningObjectives', learningObjectives)

  const handleCheckClick = (id) => {
    // let individualStepToSuccess = stepsToSuccess.byId[id].achieved;
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
      // stepsToSuccess: { byId: { [id]: { achieved: true, id: id, stepToSuccess: learningObjectives.stepsToSuccess.byId[id].stepToSuccess } } },
    }));
  };
  console.log("learningObjectives::", learningObjectives);
  const loId =
    learningObjectives.learningObjectives.allIds[learningObjectiveRefIndex];

  const allStepsToSuccessCompleted = () => {
    return learningObjectives.learningObjectives.byId[
      loId
    ].stepsToSuccess.every((stepId) => {
      return learningObjectives.stepsToSuccess.byId[stepId].achieved;
    });
  };

  console.log("allStepsToSuccessCompleted", allStepsToSuccessCompleted());

  console.log(allStepsToSuccessCompleted);

  const stepsToSuccess = learningObjectives.learningObjectives.byId[
    loId
  ].stepsToSuccess.map((step, i) => {
    console.log(
      "learningObjectives.stepsToSuccess.byId[step]",
      learningObjectives.stepsToSuccess.byId
    );
    return (
      <StepToSuccess
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


  return (
    <>
      <h4>{learningObjective}</h4>
      <StepsToSuccess>{stepsToSuccess}</StepsToSuccess>
      {allStepsToSuccessCompleted() && (
        <Link to="/well-done">
          <h5>All done?</h5><button>yes!</button>
        </Link>
      )}
    </>
  );
};

export default LearningObjective;

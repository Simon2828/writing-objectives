import React, { useState, useContext } from "react";
import { LearningObjectivesContext } from "../../LearningObjectivesContext";

const StepToSuccess = ({ stepToSuccess, id, loId, onClick, achieved }) => {


    // console.log('state: ', state)
    // const arrayOfStepsToSuccess = state.learningObjectives.byId[loId].stepsToSuccess;
    // if (arrayOfStepsToSuccess.every(step => step....byId....))
    // }

    console.log('A')



  return (
    <>
      <div style={{ display: "flex" }}>
        <li>{stepToSuccess}</li>

        <input
          type="checkbox"
          checked={achieved}
          onChange={()=>onClick(id)}
          id="horns"
          name="horns"
          style={{ margin: "0" }}
        />
        {/* <label for="horns">Horns</label> */}
      </div>
      {/* <div class="animation-ctn">
        <div class="icon icon--order-success svg"> */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 300 300"
          >
            <g fill="none" stroke="#22AE73" strokeWidth="2">
              <circle
                cx="77"
                cy="77"
                r="72"
                strokeDasharray="480px, 480px"
                strokeDashoffset="960"
              ></circle>
              <circle
                cx="77"
                cy="77"
                r="72"
                fill="#f0fad9"
                strokeDasharray="480px, 480px"
                strokeDashoffset="960"
              ></circle>
              <path
                stroke="#fff"
                strokeDasharray="100px, 100px"
                strokeDashoffset="200"
                strokeWidth="10"
                d="M43.5 77.8L63.7 97.9 112.2 49.4"
                className="st0"
              ></path>
            </g>
          </svg> */}
        {/* </div>
      </div> */}
    </>
  );
};

export default StepToSuccess;

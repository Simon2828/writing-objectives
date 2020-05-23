import React, { useState, createContext } from 'react';

const LearningObjectivesContext = createContext([{}, () => { }]);


const LearningObjectivesProvider = (props) => {
  const [state, setState] = useState({
    learningObjectives: {
      byId: {
        "learningObjective1": {
          id: "learningObjective1",
          title: "Write an introduction.",
          stepsToSuccess: ["stepToSuccess1", "stepToSuccess2", "stepToSuccess3"],
          achieved: false
        },
        "learningObjective2": {
          id: "learningObjective2",
          title: "Write a build up.",
          stepsToSuccess: ["stepToSuccess4", "stepToSuccess5"],
          achieved: false
        },
        "learningObjective3": {
          id: "learningObjective3",
          title: "Write an ending.",
          stepsToSuccess: ["stepToSuccess3","stepToSuccess6","stepToSuccess7"],
          achieved: false
        },
        "learningObjective4": {
          id: "learningObjective4",
          title: "Write an autobiography.",
          stepsToSuccess: ["stepToSuccess8","stepToSuccess9"],
          achieved: false
        },
        // "learningObjective5": {
        //   id: "learningObjective5",
        //   title: "Write an ending.",
        //   stepsToSuccess: ["stepToSuccess3","stepToSuccess6","stepToSuccess7"],
        //   achieved: false
        // },
        // "learningObjective6": {
        //   id: "learningObjective6",
        //   title: "Write an ending.",
        //   stepsToSuccess: ["stepToSuccess3","stepToSuccess6","stepToSuccess7"],
        //   achieved: false
        // },
        // "learningObjective7": {
        //   id: "learningObjective7",
        //   title: "Write an ending.",
        //   stepsToSuccess: ["stepToSuccess3","stepToSuccess6","stepToSuccess7"],
        //   achieved: false
        // },
        // "learningObjective8": {
        //   id: "learningObjective8",
        //   title: "Write an ending.",
        //   stepsToSuccess: ["stepToSuccess3","stepToSuccess6","stepToSuccess7"],
        //   achieved: false
        // },
      },
      allIds: ["learningObjective1", "learningObjective2", "learningObjective3", "learningObjective4"]
    },

    stepsToSuccess: {
      byId: {
        "stepToSuccess1": {
          id: "stepToSuccess1",
          stepToSuccess: "Introduce the character.",
          achieved: false
        },
        "stepToSuccess2": {
          id: "stepToSuccess2",
          stepToSuccess: "Describe the setting.",
          achieved: false
        },
        "stepToSuccess3": {
          id: "stepToSuccess3",
          stepToSuccess: "Use at least three adjectives.",
          achieved: false
        },
        "stepToSuccess4": {
          id: "stepToSuccess4",
          stepToSuccess: "Use short sentences to build tension.",
          achieved: false
        },
        "stepToSuccess5": {
          id: "stepToSuccess5",
          stepToSuccess: "Include an exclamation mark to show excitement.",
          achieved: false
        },
        "stepToSuccess6": {
          id: "stepToSuccess6",
          stepToSuccess: "Describe the main character's feelings.",
          achieved: false
        },
        "stepToSuccess7": {
          id: "stepToSuccess7",
          stepToSuccess: "Describe what the main character has learned.",
          achieved: false
        },
        "stepToSuccess8": {
          id: "stepToSuccess8",
          stepToSuccess: "Use the past tense.",
          achieved: false
        },
        "stepToSuccess9": {
          id: "stepToSuccess9",
          stepToSuccess: "Include time connectives.",
          achieved: false
        },
      },
      allIds: ["stepToSuccess1", "stepToSuccess2", "stepToSuccess3", "stepToSuccess4", "stepToSuccess5", "stepToSuccess6", "stepToSuccess7", "stepToSuccess8"]
    },
    searchText: ''
  });

  return (
    <LearningObjectivesContext.Provider value={[state, setState]}>
      {props.children}
    </LearningObjectivesContext.Provider>
  )
}

export { LearningObjectivesContext, LearningObjectivesProvider };


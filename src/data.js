const data = {
  learningObjectives : {
    byId : {
      "learningObjective1" : {
        id : "learningObjective1",
        title : "Write an introduction",
        stepsToSuccess : ["stepToSuccess1","stepToSuccess2","stepToSuccess3"],
        achieved : false
      },
      "learningObjective2" : {
        id : "learningObjective2",
        title : "Write a build up",
        stepsToSuccess : ["stepsToSuccess4","stepsToSuccess5"],
        achieved : false
      },
      "learningObjective3" : {
        id : "learningObjective3",
        title : "Write an ending",
        stepsToSuccess : ["stepsToSuccess3","stepsToSuccess6","stepsToSuccess7"],
        achieved : false
      },
    },
    allIds : ["learningObjective1", "learningObjective2", "learningObjective3"]
  },

  stepsToSuccess : {
    byId : {
      "stepToSuccess1" : {
        id : "stepToSuccess1",
        stepToSuccess : "Introduce the character",
        achieved : false
      },
      "stepToSuccess2" : {
        id : "stepToSuccess2",
        stepToSuccess : "Describe the setting",
        achieved : false
      },
      "stepToSuccess3" : {
        id : "stepToSuccess3",
        stepToSuccess : "Use at least three adjectives",
        achieved : false
      },
      "stepToSuccess4" : {
        id : "stepToSuccess4",
        stepToSuccess : "Use short sentences to build tension",
        achieved : false
      },
      "stepToSuccess5" : {
        id : "stepToSuccess5",
        stepToSuccess : "Include an exclamation mark to show excitement",
        achieved : false
      },
      "stepToSuccess6" : {
        id : "stepToSuccess6",
        stepToSuccess : "Describe the main character's feelings",
        achieved : false
      },
      "stepToSuccess7" : {
        id : "stepToSuccess7",
        stepToSuccess : "Describe what the main character has learned",
        achieved : false
      },
    },
    allIds : ["stepToSuccess1", "stepToSuccess2", "stepToSuccess3", "stepToSuccess4", "stepToSuccess5", "stepToSuccess6", "stepToSuccess7"]
  }

// TODO:

//    check when all the steps to success of a learning objective are met, then the learning objective is achieved

//    relationships between data:
//       - learning objectives met by individual students
//       - steps to success met by individual students
//

//   students : {
//     byId : {
//         "student1" : {
//             username : "user1",
//             name : "User 1",
//             learningObjective1: achieved ????
//         },
//         "student2" : {
//             username : "user2",
//             name : "User 2",
//         },
//         "student3" : {
//             username : "user3",
//             name : "User 3",
//         }
//     },
//     allIds : ["user1", "user2", "user3"]
// }

}

export {data};
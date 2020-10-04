export interface learningObjectivesSeedConfig {
  id: string,
  title: string,
  stepsToSuccess?: string[],
  achieved: boolean
}

export const learningObjectivesSeed: learningObjectivesSeedConfig[] = [
  {
      id: "learningObjective1",
      title: "Write an introduction.",
      stepsToSuccess: ["stepToSuccess1", "stepToSuccess2", "stepToSuccess3"],
      achieved: false
  },
  {
      id: "learningObjective2",
      title: "Write a build up.",
      stepsToSuccess: ["stepToSuccess4", "stepToSuccess5"],
      achieved: false
  },
  {
      id: "learningObjective3",
      title: "Write an ending.",
      stepsToSuccess: ["stepToSuccess3","stepToSuccess6","stepToSuccess7"],
      achieved: false
  },
  {
      id: "learningObjective4",
      title: "Write an autobiography.",
      stepsToSuccess: ["stepToSuccess8","stepToSuccess9"],
      achieved: false
  },
  {
      id: "learningObjective5",
      title: "Write a diary entry.",
      stepsToSuccess: ["stepToSuccess1","stepToSuccess2","stepToSuccess3","stepToSuccess4","stepToSuccess5","stepToSuccess10","stepToSuccess11","stepToSuccess12","stepToSuccess8"],
      achieved: false
  },
  {
      id: "learningObjective6",
      title: "Write a recount.",
      stepsToSuccess: ["stepToSuccess15","stepToSuccess16","stepToSuccess8","stepToSuccess9"],
      achieved: false
  }
];
export type QuestionnaireData = {
  trainingLevel?: string;
  trainingTypes?: string;

  interval?: string;
  caloriesToBurn?: number;
  caloriesPerDay?: number;

  certificate?: File;
  resume?: string;
  readyForIndividualTraining?: boolean;
};

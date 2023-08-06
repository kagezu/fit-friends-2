export type QuestionnaireData = {
  name?: string;
  description?: string;
  avatar?: File | string;
  gender?: string;
  location?: string;

  trainingLevel?: string;
  trainingTypes?: string;

  interval?: string;
  caloriesToBurn?: number;
  caloriesPerDay?: number;
  readyForTraining?: boolean;

  certificate?: File | string;
  resume?: string;
  readyForIndividualTraining?: boolean;
};

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

  certificate?: File | string;
  resume?: string;
  readyForIndividualTraining?: boolean;
};

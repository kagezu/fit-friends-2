import { Role } from '../const';

export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  gender: string;
  birthday?: Date | string;
  role: Role;
  description?: string;
  location: string;
  background?: string;
  createdAt?: Date | string;

  trainingLevel?: string;
  trainingTypes?: string[];

  interval?: string;
  caloriesToBurn?: number;
  caloriesPerDay?: number;
  readyForTraining?: boolean;

  certificate?: {
    id: string;
    path: string;
  }[];

  resume?: string;
  readyForIndividualTraining?: boolean;

  friend?: boolean;
  subscribed?: boolean;
};

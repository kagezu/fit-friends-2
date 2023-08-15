import { Sort } from '../const';

export type TrainingQuery = {
  coachId?: string;
  limit?: number;
  sortDirection?: Sort;
  page?: number;
  priceFrom?: number;
  priceTo?: number;
  caloriesFrom?: number;
  caloriesTo?: number;
  ratingFrom?: number;
  ratingTo?: number;
  interval?: string;

  category?: string;
  trainingType?: string;
  trainingLevel?: string;
  specialOffer?: boolean;
};

export type TrainingQuery = {
  limit?: number;
  sortDirection?: 'desc' | 'asc';
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
};
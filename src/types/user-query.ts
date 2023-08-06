export type UserQuery = {
  limit?: number;
  category?: string;
  sortDirection?: 'desc' | 'asc';
  page?: number;
  location?: string;
  trainingLevel?: string;
  trainingTypes?: string;
  readyForTraining?: boolean;
}

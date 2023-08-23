import { User } from './user';

export type Training = {
  id: string;
  coachId?: string;
  coach?: User;
  demoVideo: string;
  rating: number;
  title: string;
  trainingLevel: string;
  trainingType: string;
  interval: string;
  price: number;
  caloriesToBurn: number;
  description: string;
  usersGender: string;
  specialOffer: boolean;

  background: string;
  totalSale?: number;
  totalAmount?: number;

  count?: number;
}

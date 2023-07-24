import { User } from './user';

export type UserData = {
  user: User;
  accessToken: string;
  refreshToken: string;
};

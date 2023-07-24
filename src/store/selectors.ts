import { StoreType } from '../types/store';
import { Role } from '../const';
import { User } from '../types/user';

export const getRole = (state: StoreType): Role => state.User.role;
export const getUser = (state: StoreType): User => state.User;

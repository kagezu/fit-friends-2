import { StoreType, User } from '../types/store';
import { Role } from '../const';

export const getRole = (state: StoreType): Role => state.User.role;
export const getUser = (state: StoreType): User => state.User;

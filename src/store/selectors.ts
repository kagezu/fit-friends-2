import { StoreType } from '../types/store';
import { Role } from '../types/enums';
import { User } from '../types/user';
import { ErrorList } from '../utils/parse-error';

export const getRole = (state: StoreType): Role => state.User.role;
export const getUser = (state: StoreType): User => state.User;
export const getError = (state: StoreType): ErrorList => state.Error;
